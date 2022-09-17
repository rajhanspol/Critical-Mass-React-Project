import NavBar from "./Components/NavBar/NavBar";
import TimeBar from "./Components/TimeBar/TimeBar";
import { useRef, useState } from "react";

function App() {
  let data = require('./Data/navigation.json')
  const timeDisplay = useRef()

  const [selected, setSelected] = useState(0)
  const [markerPosition, setMarkerPosition] = useState()
  const [markerWidth, setMarkerWidth] = useState()
  const [cityTime, setCityTime] = useState()

  function onCityClick(e, index, timeZone){
    setSelected(index)
    setMarkerPosition(e.offsetLeft)
    setMarkerWidth(e.offsetWidth)
    clearInterval(timeDisplay.current)
    timeDisplay.current = setInterval(getTime, 500, timeZone)
}

function getTime(zone){
  let time = new Date().toLocaleTimeString("en-US", {
    timeZone:zone,
    timeStyle:'full',
    hourCycle:'h24'
  })
  let reqTime = time.split(' ')[0]
  setCityTime(`${reqTime}`)
}

  return (
    <>
      <NavBar 
        cityData={data}
        selected={selected}
        markerPosition={markerPosition}
        markerWidth={markerWidth}
        onCityClick={onCityClick}
      />
      <TimeBar 
        cityTime={cityTime}
      />
    </>
  );
}

export default App;
