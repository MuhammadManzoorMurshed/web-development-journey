import React from 'react';

const ResolvedTask = ({ resolvedTask, handleRemoveResolvedTask }) => {
    console.log(resolvedTask.id)
    return (
        <div className='p-4 bg-green-100 rounded-lg border border-green-200'>
            <p className='font-medium text-[18px] leading-5.5 text-[#001931] mb-4'>{resolvedTask.title}</p>
            <div className='flex justify-between'>
                <p className='text-[#02A53B]'><i className="fa-solid fa-check"></i> Completed</p>
                <p onClick={() => { handleRemoveResolvedTask(resolvedTask) }} className='font-normal text-[14px] leading-5.5 text-[#627382] cursor-pointer'>Click to remove</p>
            </div>
        </div>
    );
};

export default ResolvedTask;