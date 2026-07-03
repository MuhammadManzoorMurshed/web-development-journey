import React from 'react';
import { ChevronDown } from 'lucide-react';

const Sort = ({ handleSort, sortType }) => {
    return (
        <div className='text-center mt-8 mb-14'>
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white font-semibold text-[18px] px-5 py-3.5">{sortType ? "Sorted" : "Sort"} By {
                    sortType ? sortType.toUpperCase() : ""
                    } <ChevronDown></ChevronDown></div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => { handleSort("page") }}>Pages</a></li>
                    <li><a onClick={() => { handleSort("rating") }}>Ratings</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sort;