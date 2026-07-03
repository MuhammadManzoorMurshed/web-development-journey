
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisy-nav/DaisyNav'
import Navbar from './components/navbar/Navbar'
import PricingOptions from './components/pricing-options/PricingOptions'
import ResultsChart from './components/results-chart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/marks-chart.jsx/MarksChart'

const pricingPromise = fetch('pricingData.json').then(response => response.json());
const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
