import React from 'react';

const BodyHeader = ({ title, description }) => {
    return (
        <div className='text-center mb-10 px-4 xs:px-0 pt-20'>
            <h2 className='font-bold text-4xl xs:text-5xl text-[#001931] mb-4'>{title}</h2>
            <p className='font-normal text[20px] leading-8 text-[#627382]'>{description}</p>
        </div>
    );
};

export default BodyHeader;