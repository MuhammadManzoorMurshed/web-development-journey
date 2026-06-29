import React, { useState } from 'react';
import userIcon from './../../assets/user.svg'
import flagIcon from './../../assets/flag.svg'

const PlayerCard = ({ player, handleAvailableCoins, availableCoins, handlePickedPlayers, handlePickedPlayersNumber, pickedPlayers }) => {
    const [disable, setDisable] = useState(false);
    const isDisable = pickedPlayers.some(p => (p.playerId === player.playerId));

    const handleDisable = (biddingPrice) => {
        (availableCoins >= biddingPrice && pickedPlayers.length < 6) && setDisable(true);
    }

    return (
        <div className="card bg-base-100 shadow-sm p-6">
            <figure>
                <img
                    src={player.image}
                    alt="Shoes" />
            </figure>
            <div className="">
                <div className='flex gap-4 mt-6 mb-4'>
                    <img src={userIcon} alt="" />
                    <h2 className="font-semibold text-[20px] text-[#131313]">{player.name}</h2>
                </div>

                <div className='flex justify-between items-center border-b border-[#13131310] pb-4'>
                    <div className='flex gap-3'>
                        <img src={flagIcon} alt="" />
                        <p className='font-normal text-base text-[#131313] opacity-50'>{player.country}</p>
                    </div>
                    <button className='btn font-normal text-[14px] text-[#131313] border-none rounded-lg'>{player.role}</button>
                </div>

                <div>
                    <div className='flex justify-between'>
                        <p className='font-bold mb-4 text-base text-[#131313]'>Rating</p>
                        <p className='font-semibold text-base text-[#131313]'>{player.rating}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-semibold mb-3 text-base text-[#131313]'>{player.battingType}</p>
                        <p className='font-normal text-base text-[#131313]'>{player.bowlingType}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className='font-semibold text-base text-[#131313]'>Price: $ <span>{player.biddingPrice}</span></p>
                        <button disabled={disable || isDisable} className={`btn font-normal text-[14px] text-[#131313] px-5 py-2 rounded-lg ${disable || isDisable ? 'bg-amber-100' : 'bg-white'}`} onClick={() => {
                            handleAvailableCoins(player.biddingPrice);
                            handleDisable(player.biddingPrice);
                            handlePickedPlayers(player);
                            handlePickedPlayersNumber(player);
                        }}>{disable || isDisable ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;