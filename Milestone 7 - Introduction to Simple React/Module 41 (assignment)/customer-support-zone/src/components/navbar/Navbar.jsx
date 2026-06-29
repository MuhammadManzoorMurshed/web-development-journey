import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar justify-between max-w-360 mx-auto px-4 sm:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-[24px] leading-7 text-[#130B2D] pl-0">CS — Ticket System</a>
                </div>
                <div className="navbar-end hidden lg:flex w-auto">
                    <ul className="menu menu-horizontal px-1 font-normal text-base leading-6 space-x-2">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-auto">
                    <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-sm font-semibold text-base text-white"><i className="fa-solid fa-plus"></i> New Ticket</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;