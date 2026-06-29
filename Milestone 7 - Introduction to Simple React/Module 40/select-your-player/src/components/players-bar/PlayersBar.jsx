import React from 'react';

const PlayersBar = ({ handlePlayersToggle, playersToggle, pickedPlayers, pickedPlayersNumber }) => {
    console.log(handlePlayersToggle);
    return (
        <div className='max-w-330 px-6 sm:px-0 mx-auto text-center sm:flex sm:justify-between sm:items-center mb-8'>
            <h2 className='font-bold text-[28px] text-[#131313] mb-3 sm:mb-0'>{
                playersToggle ? (
                    <>
                        Available Players
                    </>
                ) : (
                    <>
                            Selected Players (<span>{pickedPlayers}</span>/6)
                    </>
                )
            }</h2>
            <div>
                <button className={`btn border-r-0 rounded-r-none rounded-l-xl font-bold text-base ${playersToggle === true ? 'bg-[#E7FE29] text-[#131313]' : 'bg-white text-[#13131360]'} px-7.5 py-3.5`} onClick={() => { handlePlayersToggle(true) }}>Available</button>
                <button className={`btn border-l-0 rounded-l-none border-[#13131310] rounded-r-xl font-regular text-base ${playersToggle === false ? ' bg-[#E7FE29] text-[#131313]' : 'bg-white text-[#13131360]'} px-5 py-3.5`} onClick={() => { handlePlayersToggle(false) }}>Selected (<span>{pickedPlayersNumber}</span>)</button>
            </div>
        </div>
    );
};

export default PlayersBar;