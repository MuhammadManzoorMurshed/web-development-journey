import React from 'react';
import heroImage from './../../assets/hero.png'
import appStore from './../../assets/app-store.png'
import playStore from './../../assets/google-play.png'

const Hero = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col-reverse pt-30 px-4 sm:px-0 pb-0">
                <img
                    src={heroImage}
                    className="rounded-lg"
                />
                <div className='text-center'>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#001931] leading-12 sm:leading-21">We Build<br /><span className="text-4xl sm:text-7xl font-black leading-12 sm:leading-21 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                    <p className="py-6 font-normal text-[20px] leading-8 text-[#627382]">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <button onClick={() => window.open('https://play.google.com/store/games?hl=en')} target='blank' className="btn xs:mr-4 px-6 py-7 bg-white border-0 text-2xl rounded-2xl hover:bg-violet-200 mb-5"><img className='w-8 h-8' src={playStore} alt="" />Google Play</button>
                    <button onClick={() => window.open('https://www.apple.com/app-store/')} target='blank' className="btn px-6 py-7 bg-white border-0 text-2xl rounded-2xl hover:bg-violet-200 mb-5"><img className='w-8 h-8' src={appStore} alt="" />App Store</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;