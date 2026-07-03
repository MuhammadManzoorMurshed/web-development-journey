import React from 'react';
import heroImage from '../../assets/hero-logo.png'

const Hero = () => {
    return (
        <div className="hero bg-base-200 max-w-292.5 mx-auto rounded-3xl pl-0 sm:pl-26 pr-0 sm:pr-16 py-16 mb-25">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={heroImage}
                    className="max-w-sm rounded-lg mr-0"
                />
                <div className='text-center'>
                    <h1 className="text-[48px] sm:text-[58px] font-bold leading-21 max-w-140 text-[#131313] mb-12 mr-0 sm:mr-21.5">Books to freshen up your bookshelf</h1>
                    <button className="rounded-lg font-bold text-[20px] bg-[#23BE0A] text-white px-7 py-5">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;