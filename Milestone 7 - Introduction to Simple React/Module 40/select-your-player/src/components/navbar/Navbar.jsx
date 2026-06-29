import React from 'react';
import navImage from '../../assets/logo.png'
import dollarIcon from '../../assets/dollar.png'

const Navbar = ({ availableCoins }) => {
    return (
        <div>
            <div className="navbar  max-w-330 mx-auto">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className='w-15 h-15' src={navImage} alt="" />
                    </a>
                </div>
                <div className="flex gap-2.5 border rounded-xl border-[#13131310] px-5 py-4">
                    <p className='font-semibold text-base text-[#131313]'><span>{availableCoins}</span> Coin</p>
                    <img className='w-5 h-5' src={dollarIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;