import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user } = useContext(AuthContext)

    console.log(user)



    return (
        <div className="navbar  text-white bg-[#0a0a2a]">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user?.email ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Add Service</a></li>
                            <li><a>My Reviews</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                        :
                        <Link to='/login' className='btn btn-ghost'>Log-In</Link>
                } */}

                {!user && (
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                )}

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
                                    <Link to='' className='justify-between'>
                                        Add Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to=''>My Reviews</Link>
                                </li>
                                <li>
                                    <Link to=''>Logout</Link>
                                </li>
                                <li className='mt-2'>
                                    <button

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




