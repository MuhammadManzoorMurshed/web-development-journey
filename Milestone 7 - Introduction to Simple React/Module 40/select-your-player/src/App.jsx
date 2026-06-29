
import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import AvailablePlayers from './Components/available-players/AvailablePlayers'
import SelectedPlayers from './Components/selected-players/SelectedPlayers'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import PlayersBar from './components/players-bar/PlayersBar'
import Footer from './components/footer/Footer'

const fetchPlayers = async () => {
  const response = await fetch('./Players.json');

  return response.json();
}

const playerPromise = fetchPlayers();

function App() {
  const [availableCoins, setAvailableCoins] = useState(5000000000);
  const [playersToggle, setPlayersToggle] = useState(true);
  const [pickedPlayers, setPickedPlayers] = useState([]);
  const [pickedPlayersNumber, setPickedPlayersNumber] = useState(0);
  // const [deletedPlayer, removeDeletedPlayer] = useState([]);
  // console.log("PP", pickedPlayers);

  const handleAvailableCoins = (biddingPrice) => {
    if (availableCoins <= 0 || availableCoins < biddingPrice) {
      toast.warn("Not enough available balance.", {position: "top-right", theme: "dark"});
    } else if (pickedPlayersNumber === 6) {
      return;
    } else {
      setAvailableCoins(availableCoins - biddingPrice);
    }
  }

  const handlePlayersToggle = (toggle) => {
    // console.log("Clicked!", toggle);

    setPlayersToggle(toggle);
  }

  const handlePickedPlayers = (player) => {
    // console.log("Clicked!", player);
    pickedPlayers.length < 6 && setPickedPlayers([...pickedPlayers, player]);
  }

  const handlePickedPlayersNumber = () => {
    // console.log("Clicked HPPN");
    pickedPlayersNumber >= 6 ? toast.warn("6 players are already selected", {position: "top-center", theme: "dark"}) : setPickedPlayersNumber(pickedPlayersNumber + 1);

  }

  const handledeletedPlayer = (player) => {
    // console.log("Player Deleted!");
    const pl = pickedPlayers.filter(p => p.playerId !== player.playerId);

    setPickedPlayersNumber(pickedPlayersNumber - 1);

    setAvailableCoins(availableCoins + player.biddingPrice);

    setPickedPlayers(pl);
  }

  return (
    <>
      <Navbar availableCoins={availableCoins}></Navbar>
      <Hero></Hero>
      <PlayersBar handlePlayersToggle={handlePlayersToggle} playersToggle={playersToggle} pickedPlayers={pickedPlayers.length} pickedPlayersNumber={pickedPlayersNumber}></PlayersBar>

      {
        playersToggle ? (
          <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-spinner text-warning"></span></div>}>
            <AvailablePlayers playerPromise={playerPromise} handleAvailableCoins={handleAvailableCoins} availableCoins={availableCoins} handlePickedPlayers={handlePickedPlayers} handlePickedPlayersNumber={handlePickedPlayersNumber} pickedPlayers={pickedPlayers}></AvailablePlayers>
          </Suspense>
        ) :
          < SelectedPlayers pickedPlayers={pickedPlayers} handlePlayersToggle={handlePlayersToggle} handledeletedPlayer={handledeletedPlayer}></SelectedPlayers >
      }

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
