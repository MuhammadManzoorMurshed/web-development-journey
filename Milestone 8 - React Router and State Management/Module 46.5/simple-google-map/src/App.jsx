
import { Map } from '@vis.gl/react-google-maps'
import './App.css'

function App() {

  return (
    <>
      <h1>React Google Map</h1>

      <Map
        style={{ width: '80vw', height: '100vh' }}
        defaultCenter={{ lat: 22.39355, lng: 91.82152 }}
        defaultZoom={3}
        gestureHandling='greedy'
        disableDefaultUI
      />
    </>
  )
}

export default App
