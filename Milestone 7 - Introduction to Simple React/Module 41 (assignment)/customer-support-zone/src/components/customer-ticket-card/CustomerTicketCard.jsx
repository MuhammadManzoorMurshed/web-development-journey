import React from 'react';
import greenCircle from './../../assets/green-circle.svg'
import yellowCircle from './../../assets/yellow-circle.svg'
import calendarIcon from './../../assets/calendar-icon.svg'

const CustomerTicketCard = ({ task, handlePendingTasks, pendingTasks }) => {
    const isTaskPending = pendingTasks.some(pt => task.id === pt.id);

    return (
        <div onClick={() => { handlePendingTasks(task) }} className='bg-white rounded-sm p-4 cursor-pointer'>
            <div className='flex justify-between'>
                <h3 className='max-w-82 font-medium text-[18px] leading-5.5 text-[#001931]'>{task.title}</h3>
                <p className={`text-center min-w-30 sm:max-w-36 font-medium text-base leading-6 ${isTaskPending ? 'bg-[#F8F3B9] text-[#9C7700]' : 'bg-[#B9F8CF]'} text-[#0B5E06] bg-[#B9F8CF] rounded-full px-3 py-1`}>{isTaskPending ? <img className='block mx-auto sm:inline sm:mr-2' src={yellowCircle} alt="" /> : <img className='inline mr-2' src={greenCircle} alt="" />} {
                    isTaskPending ? "In-Progress" : task.status
                }</p>
            </div>
            <p className='font-normal text-base leading-4.5 text-[#627382] pt-2 pb-4'>{task.description}</p>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <p className='font-medium text-[14px] leading-5.5 text-[#627382]'>#<span>{task.id}</span></p>
                    <p className={`font-medium text-[14px] leading-5.5 ${
                        task.priority.toLowerCase().startsWith('h') ? 'text-[#F83044]' : task.priority.toLowerCase().startsWith('m') ? 'text-[#FEBB0C]' : 'text-blue-400'
                    }`}>{task.priority}</p>
                </div>
                <div className='flex gap-4'>
                    <p className='font-normal text-[14px] leading-5.5 text-[#627382]'>{task.customer}</p>
                    <p className='font-normal text-[14px] leading-5.5 text-[#627382]'><img className='inline mr-2' src={calendarIcon} alt="" />{task.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicketCard;