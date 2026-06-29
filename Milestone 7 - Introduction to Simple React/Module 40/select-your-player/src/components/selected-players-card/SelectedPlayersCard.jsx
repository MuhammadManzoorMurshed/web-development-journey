import React from 'react';
import deleteIcon from './../../assets/delete.svg'

const SelectedPlayersCard = ({ player, handledeletedPlayer }) => {
    return (
        <div className='flex justify-between items-center border border-[#13131310] rounded-2xl p-6'>
            <div className='flex items-center gap-6'>
                <img className='w-30 h-20 rounded-2xl bg-gray-400' src={player.image} alt="" />
                <div className='space-y-3'>
                    <h3 className='font-semibold text-2xl text-[#131313]'>{player.name}</h3>
                    <p className='font-normal text-base text-[#13131360]'>{player.battingType}</p>
                </div>
            </div>
            <img onClick={() => { handledeletedPlayer(player) }} className='cursor-pointer' src={deleteIcon} alt="" />
        </div>
    );
};

export default SelectedPlayersCard;