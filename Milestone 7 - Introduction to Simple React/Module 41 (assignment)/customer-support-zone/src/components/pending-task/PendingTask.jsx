import React from 'react';

const PendingTask = ({ pendingTask, handleResolvedTasks }) => {
    console.log(pendingTask.id);
    return (
        <div onClick={() => { handleResolvedTasks(pendingTask) }} className='p-4 bg-white rounded-lg'>
            <p className='font-medium text-[18px] leading-5.5 text-[#001931] mb-4'>{pendingTask.title}</p>
            <button className="btn bg-[#02A53B] btn-block font-semibold text-base text-white">Complete</button>
        </div>
    );
};

export default PendingTask;