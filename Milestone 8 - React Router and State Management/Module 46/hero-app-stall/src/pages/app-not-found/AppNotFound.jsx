import React from 'react';
import appError from './../../assets/App-Error.png'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router';

const AppNotFound = ({ navbar = true }) => {
    const navigate = useNavigate()
    return (
        <div>
            {navbar && <Navbar />}

            <div className='bg-[#f5f5f5] px-4 md:px-0'>
                <div className='max-w-360 mx-auto py-20 flex flex-col justify-center items-center'>
                    <img className='max-w-60 xs:max-w-105' src={appError} alt="" />
                    <h1 className='font-semibold text-[20px] xs:text-3xl sm:text-[48px] leading-15 text-[#001931] mt-4 text-center'>OPPS!! APP NOT FOUND</h1>
                    <p className='font-normal text-[20px] leading-8 text-[#627382] mt-2 mb-4 text-center'>The App you are requesting is not found on our system.  please try another apps</p>
                    <button onClick={() => {navigate(-1)}} className='px-10 py-3 font-semibold text-base text-white  rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2] cursor-pointer'>Go Back</button>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default AppNotFound;