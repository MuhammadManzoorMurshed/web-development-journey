import React from 'react';
import downloadIcon from './../../assets/icon-downloads.png'
import ratingIcon from './../../assets/icon-ratings.png'
import Swal from 'sweetalert2';

const InstalledApp = ({ installedApp, handleSetChange }) => {
    const {id, image, title, downloads, ratingAvg, size } = installedApp;

    const handleUninstall = () => {
        Swal.fire({
            title: "Do you want to uninstall this app?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then(result => {
            if(result.isConfirmed) {
                handleSetChange(id);

                Swal.fire({
                    title: "Uninstalled!",
                    text: "The app has been uninstalled successfully.",
                    icon: "success",
                })
            }
        })
    }

    return (
        <div className='flex flex-col xs:flex-row justify-between items-center p-4 rounded-sm bg-white'>
            <div className='flex flex-col xs:flex-row justify-start items-center gap-4'>
                <img className='w-20 h-20 rounded-lg bg-[#D9D9D9]' src={image} alt="" />
                <div>
                    <p className='font-medium text-[20px] text-[##001931] mb-4 text-center xs:text-left'>{title}</p>
                    <div className='flex justify-center xs:justify-start items-center gap-4'>
                        <p className='font-medium text-base text-[#00D390] flex items-center gap-2'><img className='inline w-4 h-4' src={downloadIcon} alt="" /><span>{downloads}</span> M</p>
                        <p className='font-medium text-base text-[#FF8811] flex items-center gap-2'><img className='inline w-4 h-4' src={ratingIcon} alt="" />{ratingAvg}</p>
                        <p className='font-normal text-base text-[#627382]'><span>{size}</span> MB</p>
                    </div>
                </div>
            </div>
            <button onClick={handleUninstall} className='px-4 py-3 rounded-sm bg-[#00D390] font-semibold text-base text-white w-3/4 xs:w-auto mt-4 xs:mt-0 cursor-pointer'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;