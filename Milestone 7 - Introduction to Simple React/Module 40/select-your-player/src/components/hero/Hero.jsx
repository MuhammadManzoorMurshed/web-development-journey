import React from 'react';
import bannerBgImage from './../../assets/bg-shadow.png'
import bannerImage from './../../assets/banner-main.png'

const Hero = () => {
    return (
        <div className='bg-[#131313] bg-center bg-no-repeat bg-cover max-w-330 mx-auto rounded-3xl mt-6 mb-20' style={{ backgroundImage: `url(${bannerBgImage})`}}
        >
            <div className='text-center px-6 sm:px-44 py-16'>
                <img className='mx-auto' src={bannerImage} alt="" />
                <div className='py-6 space-y-4'>
                    <h2 className='font-bold text-[40px] leading-15 text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='font-medium text-2xl text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</p>
                </div>
                <div className='border border-[#E7FE29] rounded-2xl p-2 inline-block'>
                    <button className="btn bg-[#E7FE29] font-bold text-base text-[#131313] px-5 py-3.5 rounded-xl">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;