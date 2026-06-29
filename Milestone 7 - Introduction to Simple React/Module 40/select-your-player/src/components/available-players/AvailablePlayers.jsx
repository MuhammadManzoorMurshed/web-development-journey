import React, { use } from 'react';
import PlayerCard from '../player-card/PlayerCard';


const AvailablePlayers = ({ playerPromise, handleAvailableCoins, availableCoins, handlePickedPlayers, handlePickedPlayersNumber, pickedPlayers }) => {
    const players = use(playerPromise);
    // console.log(players);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-330 mx-auto'>
            {
                players.map(player => {
                    return (
                        <PlayerCard key={player.playerId} player={player} handleAvailableCoins={handleAvailableCoins} availableCoins={availableCoins} handlePickedPlayers={handlePickedPlayers} handlePickedPlayersNumber={handlePickedPlayersNumber} pickedPlayers={pickedPlayers}></PlayerCard>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;