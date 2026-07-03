import React, { Suspense } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import AppLoader from '../components/app-loader/AppLoader';
import { sleep } from '../utils/sleep';

const RootLayout = () => {
    return (
        <div>
            <header className='fixed top-0 right-0 left-0 z-50'>
                <div className='bg-base-100 shadow-sm'>
                    <Navbar />
                </div>
            </header>

            <main>
                <Suspense fallback={<AppLoader />}>
                {
                    sleep(2000)
                }
                    <Outlet />
                </Suspense>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;