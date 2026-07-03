import React from 'react';
import logo from './../../assets/logo.png';

const AppLoader = () => {
    console.log('AppLoader rendered');
    return (
        <div className='flex justify-center items-center h-screen text-5xl text-gray-400 transition-[transform]'>
            <div className='loaderScale flex justify-center items-center gap-1'>
                <span>L</span>
                <img className='w-16 h-16 inline border-5 rounded-full border-gray-400 animate-spin' src={logo} alt="" />
                <span>ADING...</span>
            </div>

            <style>
                {`
                .loaderScale {
                    animation: scaleAnimation 3s ease-in-out infinite;
                    transform-origin: center;
                }

                @keyframes scaleAnimation {
                0%, 20%, 35%, 75%, 80%, 100% {
                    transform: scale(1);
                    }
               40%, 50%, 60%, 70% {
                    transform: scale(1.5);
                    }
                }
                `}
            </style>
        </div>
    );
};

export default AppLoader;