
import authBgImg from '../../assets/authBgImage.png';

// icons
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from "../../config/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, OAuthProvider } from "firebase/auth";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const register = async () => {
    setErrorMessage("");
    setEmailError("");
    setPasswordError("");

    if (!registerEmail) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(registerEmail)) {
      setEmailError("Invalid email format");
      return;
    }
    if (registerPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }
    if (registerPassword !== registerConfirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      if (user) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google bilan kirishda xatolik:", error.code, error.message);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log("Facebook bilan kirildi");
    } catch (err) {
      console.error("Facebook bilan kirishda xatolik:", err.code, err.message);
    }
  };

  const signInWithApple = async () => {
    try {
      const appleProvider = new OAuthProvider("apple.com");
      const result = await signInWithPopup(auth, appleProvider);
      console.log("Apple bilan kirildi:", result.user);
    } catch (err) {
      console.error("Apple bilan kirishda xatolik:", err.code, err.message);
    }
  };

  return (
    <div
      className="w-full h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBgImg})` }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setRegisterEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none border-[#D9D9D9] "
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <div className="mb-3">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder="Password"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none   border-[#D9D9D9]"
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              <RemoveRedEyeOutlinedIcon />
            </button>
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>

        <div className="mb-3">
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              onChange={(e) => setRegisterConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none   border-[#D9D9D9]"
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <RemoveRedEyeOutlinedIcon className='cursor-pointer' />
            </button>
          </div>
          {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
        </div>
        <div className='w-full flex justify-start  mt-5'>
          <button onClick={register} className="px-10 cursor-pointer bg-[#00C29F] hover:bg-[#549b8e] text-white py-[13px] rounded-md">
            Sign Up
          </button>
        </div>
        <br />
        <hr />
        <div className="mt-4 text-center">
          <div className='w-full flex justify-start'>
            <p className="text-gray-600 ">Or sign in with</p>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <button onClick={handleGoogleSignIn} className='w-[155px] p-[25px] bg-[#F8F8F8] cursor-pointer'>
              <GoogleIcon fontSize='large' />
              Google
            </button>
            <button onClick={signInWithFacebook} className='w-[155px] p-[25px] bg-[#F8F8F8] cursor-pointer text-blue-500'>
              <FacebookOutlinedIcon fontSize='large' />
              Facebook
            </button>
            <button onClick={signInWithApple} className='w-[155px] p-[25px] bg-[#F8F8F8] cursor-pointer'>
              <AppleIcon fontSize='large' />
              Apple
            </button>
          </div>
        </div>
        <p className="text-center mt-4">
          I already have an account. <Link to="/login" className="text-blue-500">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
