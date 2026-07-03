import React from 'react';
import appIcon from './../../assets/app.png'
import githubIcon from './../../assets/github.svg'
import homeIcon from './../../assets/home.png'
import downloadIcon from './../../assets/downloads.png'
import logo from './../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { Download, House } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar flex-col xs:flex-row gap-6 xs:gap-0 max-w-120 xs:max-w-360 xs:mx-auto">
            <div className="flex xs:navbar-start w-full xs:w-1/2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""}
                            >
                                <img className='w-6 h-6' src={homeIcon} alt="" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/all-apps'
                                className={({ isActive }) => isActive ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""}

                            >
                                <img className='w-6 h-6' src={appIcon} alt="" />
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/installed-apps'
                                className={({ isActive }) => isActive ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""}
                            >
                                <img className='w-6 h-6' src={downloadIcon} alt="" />
                                Installed Apps
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className="btn btn-ghost font-bold text-3xl leading-6.5 bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent px-0 xs:px-4 sm:pl-0">
                        <img className='w-10 h-10' src={logo} alt="" />HERO.IO
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li className='font-semibold text-base leading-6 text-[#00000090]'>
                        <NavLink
                            to='/'
                            className={({ isActive }) => {
                                return isActive ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""
                            }}
                        >
                            {/* <House className='w-4 h-4' /> */}
                            <img className='w-4 h-4' src={homeIcon} alt="" />
                            <span className=''>Home</span>
                        </NavLink>
                    </li>

                    <li className='font-semibold text-base leading-6 text-[#00000090]'>
                        <NavLink
                            to='/all-apps'
                            className={({ isActive }) => isActive ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""}
                        >
                            <img className='w-4 h-4 filter' src={appIcon} alt="" /><span>Apps</span>
                        </NavLink>
                    </li>
                    <li className='font-semibold text-base leading-6 text-[#00000090]'>
                        <NavLink
                            to='/installed-apps'
                            className={({ isActive }) => isActive ? "bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""}
                        >
                            {/* <Download className='w-4 h-4' /> */}
                            <img className='w-4 h-4' src={downloadIcon} alt="" />
                            <span>Installed Apps</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="xs:navbar-end w-3/4 xs:w-1/2">
                <NavLink
                    to='https://github.com/MuhammadManzoorMurshed'
                    className="btn font-semibold text-base text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 xs:px-4 w-full xs:w-auto"
                    target='blank'
                >
                    <img className='w-4 h-4 stroke-amber-50' src={githubIcon} alt="" />Contribute
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;