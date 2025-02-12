import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import icon from '../assets/icon.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    return (
        <div className="navbar w-full text-blue-700 bg-white sticky top-0 z-50 shadow-md">
            {/* Container for the navbar content */}
            <div className="max-w-screen-xl w-full mx-auto px-4 lg:px-8 flex justify-between items-center">
                {/* Logo Section */}
                <div className="navbar-start flex items-center gap-1">
                    <Link to="/" className="flex justify-center items-center gap-1">
                        <div className="w-12">
                            <img src={icon} alt="Logo" />
                        </div>
                        <div className="hidden md:block text-black font-bold text-xl">
                            Service-Review-System
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex flex-grow justify-center">
                    <ul className="menu menu-horizontal px-1 font-semibold space-x-4">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        {/* Routes for logged-in users */}
                        {user && (
                            <>
                                <li><Link to="/myServices">My Services</Link></li>
                                <li><Link to="/reviews">My Reviews</Link></li>
                                <li><Link to="/addservice">Add Service</Link></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* User Profile Section */}
                <div className="navbar-end flex items-center">
                    {/* For logged-out users */}
                    {!user && (
                        <button className="mr-3 font-bold">
                            <Link to="/login">Login</Link>
                        </button>
                    )}
                    {/* For logged-in users */}
                    {user && (
                        <div className="dropdown dropdown-end z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div title={user?.displayName} className="w-10 rounded-full">
                                    <img
                                        referrerPolicy="no-referrer"
                                        alt="User Profile Photo"
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/myServices">My Services</Link></li>
                                <li><Link to="/reviews">My Reviews</Link></li>
                                <li><Link to="/addservice" className="justify-between">Add Service</Link></li>
                                <li className="mt-2">
                                    <button
                                        onClick={() => logOut()}
                                        className="bg-blue-500 block text-center w-full text-black"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Mobile Menu Button (Moved to navbar-end) */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
                    <ul className="menu p-4 font-semibold space-y-2">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        {/* Routes for logged-in users */}
                        {user && (
                            <>
                                <li><Link to="/myServices">My Services</Link></li>
                                <li><Link to="/reviews">My Reviews</Link></li>
                                <li><Link to="/addservice">Add Service</Link></li>
                            </>
                        )}
                        {/* For logged-out users */}
                        {!user && (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
