import React from 'react';
import SelectedPlayersCard from '../selected-players-card/SelectedPlayersCard';

const SelectedPlayers = ({ pickedPlayers, handlePlayersToggle, handledeletedPlayer }) => {
    console.log("Len: ", pickedPlayers.length);
    return (
        <div className='max-w-330 mx-auto mt-8 px-6'>
            {
                pickedPlayers.map(player => {
                    return (
                        <SelectedPlayersCard player={player} handledeletedPlayer={handledeletedPlayer}></SelectedPlayersCard>
                    )
                })
            }

            <div className='border border-[#131313] rounded-2xl p-2 inline-block mt-12'>
                <button onClick={() => {
                    handlePlayersToggle(true)
                }} className="btn bg-[#E7FE29] font-bold text-base text-[#131313] px-5 py-3.5 rounded-xl">Add More Players</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;