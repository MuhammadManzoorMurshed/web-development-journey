import React from 'react';
import bannerBgImage from './../../assets/bg-shadow.png'
import btnImage from './../../assets/btn-image.png'
import footerLogo from './../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='border mt-75 relative bg-[#06091A]'>
            <div className='w-9/10 mx-auto border-2 border-white rounded-3xl sm:w-335 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 p-6'>
                <div className='border border-[#13131310] rounded-3xl w-full bg-white' style={{ backgroundImage: `url(${bannerBgImage})` }}>
                    <div className='px-6 sm:px-58 py-22 text-center'>
                        <h3 className='font-bold sm:text-[32px] text-[24px] text-[#131313]'>Subscribe to our Newsletter</h3>
                        <p className='mt-3 mb-6 font-medium text-[20px] text-[#13131370]'>Get the latest updates and news right in your inbox!</p>
                        <div className='max-w-140 mx-auto sm:flex space-y-5 sm:space-y-0'>
                            <input className='border border-[#13131315] mr-4.5 px-7.5 py-4.5 rounded-xl w-full' type="email" name="" id="" placeholder='Enter Your Email' />
                            <button className='bg-center bg-no-repeat bg-cover px-7.5 py-4.5 rounded-xl font-bold text-base text-[#131313] w-1/2 sm:w-auto' style={{ backgroundImage: `url(${ btnImage})`}}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-330 mx-auto border mt-80 sm:mt-60 px-6 sm:px-0'>
                <img className='mx-auto mb-16' src={footerLogo} alt="" />

                <div className='sm:flex text-center sm:text-left sm:justify-between'>
                    <div>
                        <h4 className='text-white mb-4 font-semibold text-lg'>About Us</h4>
                        <p className='text-[#FFFFFF60] font-normal text-base leading-6.5'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </div>
                    <div>
                        <h4 className='text-white mb-4 mt-8 sm:mt-0 font-semibold text-lg'>Quick Links</h4>
                        <ul className='text-[#FFFFFF60] sm:list-disc sm:pl-6 font-normal text-base leading-9'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white mb-4 mt-8 sm:mt-0 font-semibold text-lg'>Subscribe</h4>
                        <p className='text-[#FFFFFF60] font-normal text-base leading-6.5'>Subscribe to our newsletter for the <br /> latest updates.</p>

                        <div className='max-w-140 mx-auto flex mt-5'>
                            <input className='bg-white border border-[#13131315] px-7.5 py-3.5 rounded-xl w-full border-r-0 rounded-r-none text-[#13131340] font-normal text-base' type="email" name="" id="" placeholder='Enter Your Email' />
                            <button className='bg-center bg-no-repeat bg-cover px-7.5 py-3.5 rounded-xl font-bold text-base text-[#131313] border-l-0 rounded-l-none' style={{ backgroundImage: `url(${btnImage})` }}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='mt-8 sm:mt-18'>
                    <p className='text-center text-[#FFFFFF60] p-8'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;