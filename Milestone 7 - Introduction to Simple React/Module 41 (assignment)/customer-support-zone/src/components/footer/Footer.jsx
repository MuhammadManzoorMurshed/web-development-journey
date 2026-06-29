import React from 'react';
import twitter from './../../assets/twitter.svg'
import linkedin from './../../assets/linkedin.svg'
import facebook from './../../assets/facebook.svg'
import email from './../../assets/email.svg'

const Footer = () => {
    return (
        <div className='border relative bg-[#06091A]'>

            <div className='max-w-360 mx-auto border mt-20 mb-7.5 px-6 sm:px-0'>

                <div className='sm:flex text-center sm:text-left sm:justify-between'>
                    <div>
                        <h4 className='text-white mb-4 font-semibold text-lg'>CS — Ticket System</h4>
                        <p className='text-[#FFFFFF60] font-normal text-base leading-6.5'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <h4 className='text-white mb-4 mt-8 sm:mt-0 font-semibold text-lg'>Company</h4>
                        <ul className='text-[#FFFFFF60] font-normal text-base leading-9'>
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mb-4 mt-8 sm:mt-0 font-semibold text-lg'>Services</h4>
                        <ul className='text-[#FFFFFF60] font-normal text-base leading-9'>
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mb-4 mt-8 sm:mt-0 font-semibold text-lg'>Information</h4>
                        <ul className='text-[#FFFFFF60] font-normal text-base leading-9'>
                            <li>Privacy Policy</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mb-4 mt-8 sm:mt-0 font-semibold text-lg'>Social Links</h4>
                        <ul className='text-[#FFFFFF60] font-normal text-base leading-9'>
                            <li><img className='inline' src={twitter} alt="" /> @CS — Ticket System</li>
                            <li><img className='inline' src={linkedin} alt="" /> @CS — Ticket System</li>
                            <li><img className='inline' src={facebook} alt="" /> @CS — Ticket System</li>
                            <li><img className='inline' src={email} alt="" /> support@cst.com</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-8 sm:mt-20'>
                    <p className='text-center text-[#FAFAFA] px-8'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;