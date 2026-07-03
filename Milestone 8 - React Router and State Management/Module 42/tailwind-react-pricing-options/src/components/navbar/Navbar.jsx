import React, { useState } from 'react';
import Link from './link/Link';
import { Menu, X } from 'lucide-react'

const navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
    { id: 6, name: "Login", path: "/login" }
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const navLinks = navigation.map(route => <Link key={route.id} route={route} />);

    return (
        <nav className='flex justify-between items-center mx-6 py-6'>
            <span className='flex items-center' onClick={() => setOpenMenu(!openMenu)}>
                <ul className={`md:hidden bg-blue-400 p-3 rounded-tr-lg rounded-br-lg font-semibold space-y-2 absolute duration-500 ${
                    openMenu ? 'left-7.5 top-15' : '-left-50 top-15'
                }`}>
                    {
                        navLinks
                    }
                </ul>

                {
                    openMenu ? <X className='mr-4 md:hidden cursor-pointer'></X> : <Menu className='mr-4 md:hidden cursor-pointer'></Menu>
                }

                <h3 className='text-2xl font-extrabold'>Logo</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    navLinks
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navigation.map(route => <li>
                        <a className='mr-10' href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10' href="">Home</li>
                <li className='mr-10' href="">About</li>
                <li className='mr-10' href="">Blog</li>
                <li className='mr-10' href="">Contact</li>
            </ul> */}

            <button className='btn'>Login</button>
        </nav>
    );
};

export default Navbar;