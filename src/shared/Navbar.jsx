import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { button } from 'motion/react-client';
import icon from '../assets/icon.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar  text-white bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="navbar-start">
                <Link to='/' className='flex justify-center items-center gap-1'>
                    <div className='w-13'>
                        <img src={icon} alt="" />
                    </div>
                    <div className='hidden md:block text-white font-bold text-xl'>
                        Service-Review-System
                    </div>
                </Link>
            </div>
            <div className="navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Services</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                {!user &&
                    <button className='mr-3 font-bold'> <Link to='/login'>Login</Link></button>
                }

                {
                    user && (
                        <div className='dropdown dropdown-end z-50 '>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName} className='w-10 rounded-full'>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52'
                            >
                                <li>
                                    <Link to='/addservice' className='justify-between'>
                                        Add Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to=''>My Reviews</Link>
                                </li>
                                <li>
                                    <Link to='/myServices'>My Services</Link>
                                </li>
                                <li>
                                    <Link to=''>Logout</Link>
                                </li>
                                <li className='mt-2'>
                                    <button
                                        onClick={() => logOut()}
                                        className='bg-gray-600 block text-center'
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default Navbar;




