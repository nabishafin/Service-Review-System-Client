import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { AuthContext } from '../provider/AuthProvider';
import { FiMoon, FiSun } from 'react-icons/fi'; // Import the icons

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const location = useLocation(); // Get the current location

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Sync with local storage on first load
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Check if the link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar w-full text-light-text bg-light-header dark:bg-dark-header dark:text-dark-text sticky top-0 z-50 shadow-md">
            <div className="md:w-10/12  w-full mx-auto px-4 lg:px-8 flex justify-between items-center">
                {/* Logo Section */}
                <div className="navbar-start flex items-center gap-1">
                    <Link to="/" className="flex justify-center items-center gap-1">
                        <div className=" text-3xl font-bold text-light-text dark:text-dark-text">
                            ServiceHub
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex flex-grow justify-center">
                    <ul className="menu menu-horizontal px-1 font-semibold space-x-4">
                        <li>
                            <Link
                                to="/"
                                className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/') ? 'bg-light-button dark:bg-dark-button' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/services') ? 'bg-light-button dark:bg-dark-button' : ''}`}
                            >
                                Services
                            </Link>
                        </li>
                        {user && (
                            <>
                                <li>
                                    <Link
                                        to="/myServices"
                                        className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/myServices') ? 'bg-light-button dark:bg-dark-button' : ''}`}
                                    >
                                        My Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/reviews"
                                        className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/reviews') ? 'bg-light-button dark:bg-dark-button' : ''}`}
                                    >
                                        My Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/addservice"
                                        className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/addservice') ? 'bg-light-button dark:bg-dark-button' : ''}`}
                                    >
                                        Add Service
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Navbar End Section */}
                <div className="navbar-end flex items-center gap-3">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center gap-2 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-light-card dark:hover:bg-dark-card"
                    >
                        {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
                        <span className="hidden md:inline">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                    </button>

                    {/* User Profile Section */}
                    {user ? (
                        <div className="dropdown dropdown-end z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div title={user?.displayName} className="w-10 rounded-full">
                                    <img
                                        referrerPolicy="no-referrer"
                                        alt="User Profile"
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-dark-card rounded-box w-52">
                                <li>
                                    <Link to="/profile" className="transition-all hover:text-light-button dark:hover:text-dark-button">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/myServices" className="transition-all hover:text-light-button dark:hover:text-dark-button">My Services</Link>
                                </li>
                                <li>
                                    <Link to="/reviews" className="transition-all hover:text-light-button dark:hover:text-dark-button">My Reviews</Link>
                                </li>
                                <li>
                                    <Link to="/addservice" className="transition-all hover:text-light-button dark:hover:text-dark-button">Add Service</Link>
                                </li>
                                <li className="mt-2">
                                    <button
                                        onClick={logOut}
                                        className="bg-light-button w-full text-white text-center py-2 rounded hover:bg-blue-600 transition-all dark:bg-dark-button dark:hover:bg-dark-card"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <button className="mr-3 font-bold">
                            <Link to="/login" className="transition-all hover:text-light-button dark:hover:text-dark-button">Login</Link>
                        </button>
                    )}
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white dark:bg-dark-card shadow-lg z-50">
                        <ul className="menu p-4 font-semibold space-y-2">
                            <li><Link to="/" className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/') ? 'bg-light-button dark:bg-dark-button' : ''}`}>Home</Link></li>
                            <li><Link to="/services" className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/services') ? 'bg-light-button dark:bg-dark-button' : ''}`}>Services</Link></li>
                            {user && (
                                <>
                                    <li><Link to="/myServices" className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/myServices') ? 'bg-light-button dark:bg-dark-button' : ''}`}>My Services</Link></li>
                                    <li><Link to="/reviews" className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/reviews') ? 'bg-light-button dark:bg-dark-button' : ''}`}>My Reviews</Link></li>
                                    <li><Link to="/addservice" className={`transition-all hover:text-light-button dark:hover:text-dark-button ${isActive('/addservice') ? 'bg-light-button dark:bg-dark-button' : ''}`}>Add Service</Link></li>
                                </>
                            )}
                            {!user && (
                                <li><Link to="/login" className="transition-all hover:text-light-button dark:hover:text-dark-button">Login</Link></li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
