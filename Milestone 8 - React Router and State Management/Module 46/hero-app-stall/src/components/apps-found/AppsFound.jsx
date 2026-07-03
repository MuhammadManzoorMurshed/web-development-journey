import React from 'react';
import { ChevronDown } from 'lucide-react';

const AppsFound = ({ type, totalApps, handleSearch, handleSort }) => {
    console.log(type)
    return (
        <div className='flex flex-col xs:flex-row justify-between items-center px-4 mb-4'>
            <p className='font-semibold text-2xl leading-8 text-[#001931]'>(<span>{totalApps}</span>) Apps Found</p>
            
            {
                type === 'search' && (
                    <label className="input bg-[#f5f5f5] w-50 sm:w-60 md:w-87">
                        <svg className="h-[2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => handleSearch(e.target.value)} className='font-normal text-base text-[#627382]' type="search" placeholder="Search Apps" />
                    </label>
                )
            }
            {
                type === "sort" && (
                    <div className="dropdown dropdown-bottom dropdown-end pl-4 py-3">
                        <div tabIndex={0} role="button" className="btn m-1 bg-[#f5f5f5] text-[#627382]">Sort By Size <ChevronDown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => handleSort("dsc")}><a>High-Low</a></li>
                            <li onClick={() => handleSort("asc")}><a>Low-High</a></li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default AppsFound;