import React, { useState } from 'react';
import downloadIcon from './../../assets/icon-downloads.png'
import ratingIcon from './../../assets/icon-ratings.png'
import reviewIcon from './../../assets/icon-review.png'
import { getFromLS, setToLS } from '../../utils/localStorageUtils';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Todo = ({ app }) => {
    const navigate = useNavigate();
    const [change, setChange] = useState(false);
    console.log(change);
    const { id, image, title, companyName, downloads, ratingAvg, reviews, size } = app;
    const installedApps = getFromLS("installedApps");

    const installed = installedApps.some(installedApp => installedApp === id);

    const handleSetInstalled = id => {
        setToLS(id);
        setChange(prevChange => setChange(!prevChange));
    }

    const handleInstallation = () => {
        Swal.fire({
            title: "Do you want to install this app?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then(result => {
            if(result.isConfirmed) {
                handleSetInstalled(id);
                Swal.fire("Installed!", "", "success");
                navigate('/installed-apps');
            }
        })
    }

    return (
        <div className='flex flex-col sm:flex-row justify-start items-center gap-10'>

            <img className='w-68.75 h-68.75 xs:w-87.5 xs:h-87.5 bg-white' src={image} alt="" />
            <div className='flex-1'>
                <div className=''>
                    <h4 className='font-bold text-[32px] text-[#001931] mb-2'>{title}</h4>
                    <p className='font-normal text-[20px] leading-8 bg-linear-to-r from-[#54CF68] to-[#54CF68] bg-clip-text text-transparent'>Developed by
                        <span className='font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> {companyName}</span></p>
                </div>
                <hr className='border-[#00193130] my-7.5' />
                <div className='flex justify-center xs:justify-start items-stretch gap-6 mb-7.5'>
                    <div className='space-y-2 text-center xs:text-left h-full'>
                        <img className='inline w-10 h-10' src={downloadIcon} alt="" />
                        <p className='font-normal text-base leading-6'>Downloads</p>
                        <p className='font-extrabold text-[40px] leading-10 text-[#001931]'><span>{downloads}</span> M</p>
                    </div>
                    <div className='space-y-2 text-center xs:text-left h-full'>
                        <img className='inline w-10 h-10' src={ratingIcon} alt="" />
                        <p className='font-normal text-base leading-6'>Average Ratings</p>
                        <p className='font-extrabold text-[40px] leading-10 text-[#001931]'><span>{ratingAvg}</span></p>
                    </div>
                    <div className='space-y-2 text-center xs:text-left h-full'>
                        <img className='inline w-10 h-10' src={reviewIcon} alt="" />
                        <p className='font-normal text-base leading-6'>Total Reviews</p>
                        <p className='font-extrabold text-[40px] leading-10 text-[#001931]'><span>{reviews}</span>K</p>
                    </div>
                </div>
                <div className='text-center xs:text-left'>
                    <button onClick={handleInstallation} className={`px-5 py-3.5 font-semibold text-[20px] text-white rounded-sm ${installed ? 'disabled bg-emerald-500' : 'bg-[#00D390] cursor-pointer'}`}>{
                        installed ? "Installed" : <>Install Now (<span>{size}</span> MB)</>
                    }</button>
                </div>
            </div>
        </div>
    );
};

export default Todo;