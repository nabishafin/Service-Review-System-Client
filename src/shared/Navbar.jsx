import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FiMoon, FiSun } from 'react-icons/fi';
import icon from '../assets/icons8-service-96.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const location = useLocation();

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

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const isActive = (path) => location.pathname === path;
    const closeMobileMenu = () => setIsMenuOpen(false);

    return (
        <div className="w-full sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div className="md:w-10/12 w-full mx-auto px-4 lg:px-8 flex justify-between items-center py-4 text-gray-900 dark:text-white">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={icon} className="w-12 sm:w-14" alt="Logo" />
                    <span className="text-2xl font-bold">ServiceHub</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 font-semibold items-center">
                    <Link to="/" className={`${isActive('/') ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}>Home</Link>
                    <Link to="/services" className={`${isActive('/services') ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}>Services</Link>
                    {user && (
                        <>
                            <Link to="/myServices" className={`${isActive('/myServices') ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}>My Services</Link>
                            <Link to="/reviews" className={`${isActive('/reviews') ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}>My Reviews</Link>
                            <Link to="/addservice" className={`${isActive('/addservice') ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}>Add Service</Link>
                        </>
                    )}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
                        title="Toggle Dark Mode"
                    >
                        {darkMode ? <FiMoon size={25} /> : <FiSun size={25} />}
                    </button>

                    {/* User Avatar / Login */}
                    {user ? (
                        <img
                            src={user?.photoURL}
                            alt="user"
                            className="w-10 h-10 rounded-full hidden lg:block"
                        />
                    ) : (
                        <Link to="/login" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 hidden lg:block">Login</Link>
                    )}

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden px-4 pb-4 bg-white dark:bg-gray-900 shadow-md transition z-40">
                    <ul className="flex flex-col space-y-2 font-semibold">
                        <Link to="/" onClick={closeMobileMenu} className={`${isActive('/') ? 'text-blue-600 dark:text-blue-400' : ''}`}>Home</Link>
                        <Link to="/services" onClick={closeMobileMenu} className={`${isActive('/services') ? 'text-blue-600 dark:text-blue-400' : ''}`}>Services</Link>

                        {user ? (
                            <>
                                <Link to="/profile" onClick={closeMobileMenu} className={`${isActive('/profile') ? 'text-blue-600 dark:text-blue-400' : ''}`}>Profile</Link>
                                <Link to="/myServices" onClick={closeMobileMenu} className={`${isActive('/myServices') ? 'text-blue-600 dark:text-blue-400' : ''}`}>My Services</Link>
                                <Link to="/reviews" onClick={closeMobileMenu} className={`${isActive('/reviews') ? 'text-blue-600 dark:text-blue-400' : ''}`}>My Reviews</Link>
                                <Link to="/addservice" onClick={closeMobileMenu} className={`${isActive('/addservice') ? 'text-blue-600 dark:text-blue-400' : ''}`}>Add Service</Link>
                                <button onClick={() => { logOut(); closeMobileMenu(); }} className="text-left hover:text-red-500 dark:hover:text-red-600">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" onClick={closeMobileMenu}>Login</Link>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
