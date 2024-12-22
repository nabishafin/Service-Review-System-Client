import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { button } from 'motion/react-client';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

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

                {!user &&
                    <button> <Link to='/login'>Login</Link></button>
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




