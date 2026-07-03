import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer className='bg-base-200 py-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;