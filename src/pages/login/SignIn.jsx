import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import authBgImg from '../../assets/authBgImage.png';

// icons
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="w-full h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBgImg})` }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <div className="mb-3">
          <label className="block text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3 relative">
          <label className="block text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-9"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>

        <div className='w-full flex justify-start mb-5'>
          <button onClick={handleSignIn} className="px-10 bg-[#00C29F] text-white py-[13px] rounded-md">
            Sign In
          </button>
        </div>
        <hr />

        <div className="mt-4 text-center">
          <div className='w-full flex justify-start'>
            <p className="text-gray-600 ">Or sign in with</p>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <div className='w-[155px] p-[25px] bg-[#F8F8F8] cursor-pointer'>
              <GoogleIcon fontSize='large' />
              Google
            </div>
            <div className='w-[155px] p-[25px] bg-[#F8F8F8] cursor-pointer'>
              <FacebookOutlinedIcon fontSize='large' />
              Facebook
            </div>
            <div className='w-[155px] p-[25px] bg-[#F8F8F8] cursor-pointer'>
              <AppleIcon fontSize='large' />
              Apple
            </div>
          </div>
        </div>

        <p className="text-center mt-4">
          Don’t have an account? <Link to="/register" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
