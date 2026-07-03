import React from 'react';

const Banner = () => {
    return (
        <div className='p-4 md:p-20 bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>
            <h2 className='font-bold text-5xl text-white mb-10 text-center w-4/5 mx-auto md:w-full'>Trusted by Millions, Built for You</h2>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-15 sm:gap-6 max-w-225 mx-auto'>
                <div className='text-center'>
                    <p className='font-normal text-base leading-6 text-[#FFFFFF90]'>Total Downloads</p>
                    <h2 className='font-extrabold text-[64px] text-white leading-18 my-3'>29.6M</h2>
                    <p className='font-normal text-base leading-6 text-[#FFFFFF90]'>21% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='font-normal text-base leading-6 text-[#FFFFFF90]'>Total Reviews</p>
                    <h2 className='font-extrabold text-[64px] text-white leading-18 my-3'>906K</h2>
                    <p className='font-normal text-base leading-6 text-[#FFFFFF90]'>46% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='font-normal text-base leading-6 text-[#FFFFFF90]'>Active Apps</p>
                    <h2 className='font-extrabold text-[64px] text-white leading-18 my-3'>132+</h2>
                    <p className='font-normal text-base leading-6 text-[#FFFFFF90]'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;