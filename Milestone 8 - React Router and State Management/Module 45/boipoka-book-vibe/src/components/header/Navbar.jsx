import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('h');

    const handleActive = (ch) => {
        setActive(ch);
    }
    const links = (
        <>
            <li onClick={() => handleActive('h')} className={
                active === 'h' ? 'font-semibold text-[#23BE0A] border rounded-lg' : 'font-normal text-[18px] text-[#131313]'
            }>
                <Link to="/">Home</Link>
            </li>

            <li onClick={() => handleActive('lb')} className={
                active === 'lb' ? 'font-semibold text-[#23BE0A] border rounded-lg' : 'font-normal text-[18px] text-[#131313]'
            }>
                <Link to="/listed-books">Listed Books</Link>
            </li>

            <li onClick={() => handleActive('ptr')} className={
                active === 'ptr' ? 'font-semibold text-[#23BE0A] border rounded-lg' : 'font-normal text-[18px] text-[#131313]'
            }>
                <Link to="/pages-to-read">Pages to Read</Link>
            </li>
        </>
    );
      
    return (
        <div className="navbar bg-base-100 my-12.5 max-w-292.5 mx-auto px-4 sm:p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="font-bold text-[28px] text-[#131313]">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <a className="btn bg-[#23BE0A] font-semibold text-[18px] text-white px-7 py-4.5">Sign In</a>
                <a className="btn bg-[#59C6D2] font-semibold text-[18px] text-white px-7 py-4.5">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;