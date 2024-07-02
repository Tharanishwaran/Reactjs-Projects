import { useState } from 'react'
import './App.css'
import searchicon from './assets/search.png'
import sunicon from './assets/sun.png'
import cloudicon from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import humidityicon from './assets/humidity.png'
import rainicon from './assets/rain.png'
import snowicon from './assets/snow.png'
import windicon from './assets/wind.png'

const WeatherDetails = ({icon,temp,city,country,lat,longt}) => {

  return(<>
  
  <div className='image'>

  <img src={icon} ></img>

  </div>

  <div className='temp'>{temp}°C</div>
  <div className='city'>{city}</div>
  <div className='country'>{country}</div>
  <div className='lat'>latitute:{lat}</div>
  <div className='lat'>longtitute:{longt}</div>


  
  </>);

};



function App() {
 
const [Icon,setIcon] = useState(snowicon);
const [Temp,setTemp] = useState(0);
const [City,setCity] = useState("Tiruppur");
const [country,setCountry] = useState("India");
const [lat,setlat] = useState("45");
const [longt,setlongt] = useState("45");



  return (
    <>
    <div className="container">
  
     <div className="input-container"> 
     <input type="text" className='cityInput'></input>
    

     <div className='search-icon'>
        
        <img src={searchicon} height={20} width={15}></img>
 
     </div>
     </div>

     <WeatherDetails icon={Icon} temp={Temp} city={City} country={country} lat={lat} longt={longt}></WeatherDetails>
     </div>
    </>
  )
}

export default App
