
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

// const BottlesPromise = fetch('../public/bottles.json')
//   .then(response => response.json())

// const BottlesPromise2 = fetch('https://raw.githubusercontent.com/MuhammadManzoorMurshed/bottles-data/refs/heads/main/bottles.json')
//   .then(response => response.json());

const BottlesPromise = fetch('../public/bottles.json')
  .then(response => response.json())

function App() {

  return (
    <>

      <h1>Buy Awesome Water Bottle</h1>

      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles BottlesPromise={BottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
