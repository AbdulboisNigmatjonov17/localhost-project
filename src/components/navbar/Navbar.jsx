import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../../assets/logo.svg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsOpen(false);
        } catch (error) {
            console.error("Logout xatosi:", error);
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full">
            <div className="Container w-full h-[10vh] flex justify-between items-center px-5">

                <div>
                    <NavLink to={"/"}>
                        <img src={logo} alt="navLogo" className="h-10" />
                    </NavLink>
                </div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/stays"}>Stays</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/become-a-host"}>Become a host</NavLink>
                    </li>
                </ul>
                <div className="flex gap-3 items-center">
                    <NotificationsOutlinedIcon fontSize="large" />

                    {user ? (
                        <div className="relative flex items-center">
                            <button onClick={toggleModal} className="focus:outline-none">
                                <img
                                    src={user.photoURL || "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"}
                                    alt="User"
                                    className="w-10 h-10 rounded-full cursor-pointer object-cover"
                                />
                            </button>

                            {/* Modal */}
                            {isOpen && (
                                <div className="absolute -right-5 top-12 w-48 bg-white border rounded-md shadow-lg p-2">
                                    <p className="text-center">{user.email}</p>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                    <button className="w-full mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Back</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <NavLink
                                to={"/login"}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to={"/register"}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                                Register
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
