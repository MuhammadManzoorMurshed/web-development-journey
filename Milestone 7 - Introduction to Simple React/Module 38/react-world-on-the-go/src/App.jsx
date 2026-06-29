
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(response => response.json());

function App() {


  return (
    <>

      <Suspense fallback="Countries are loading...">
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    </>
  )
}

export default App
