import React from 'react';
import bgLeft from './../../assets/vector1.png'
import bgRight from './../../assets/vector1.png'

const Hero = ({ pendingTasksNumber, resolvedTasksNumber }) => {
    return (
        <div className='max-w-360 mx-auto mb-20 sm:flex justify-between items-center gap-6 px-4 sm:px-0 space-y-4 sm:space-y-0'>
            <div className='relative p-10 w-full rounded-lg space-y-4  text-white text-center' style={
                {
                    backgroundImage: `linear-gradient(to bottom right, #632EE3, #9F62F2)`,
                }
            }>
                <img className='absolute top-0 left-0' src={bgLeft} alt="" />

                <div className='my-7'>
                    <p className='font-normal text-[24px] leading-6.5'>In-Progress</p>
                    <h2 className='font-semibold text-[60px]'>{pendingTasksNumber}</h2>
                </div>

                <img className='absolute top-0 right-0 scale-x-[-1]' src={bgRight} alt="" />
            </div>
            <div className='relative p-10 w-full rounded-lg space-y-4 text-white text-center' style={
                {
                    backgroundImage: `linear-gradient(to bottom right, #54CF68, #00827A)`
                }
            }>
                <img className='absolute left-0 top-0' src={bgLeft} alt="" />

                <div className='my-7'>
                    <p className='font-normal text-[24px] leading-6.5'>Resolved</p>
                    <h2 className='font-semibold text-[60px]'>{resolvedTasksNumber}</h2>
                </div>

                <img className='absolute right-0 top-0 scale-x-[-1]' src={bgRight} alt="" />
            </div>
        </div>
    );
};

export default Hero;