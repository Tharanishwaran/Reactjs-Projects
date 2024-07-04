import { useEffect, useState } from 'react';
import './App.css';
import searchicon from './assets/search.png';
import sunicon from './assets/sun.png';
import cloudicon from './assets/cloud.png';
import drizzle from './assets/drizzle.png';
import humidityicon from './assets/humidity.png';
import rainicon from './assets/rain.png';
import snowicon from './assets/snow.png';
import windicon from './assets/wind.png';

const WeatherDetails = ({ icon, temp, city, country, lat, longt, wind, humidity }) => {
  return (
    <>
      <div className='image'>
        <img src={icon} alt="weather icon" />
      </div>

      <div className='temp'>{temp}°C</div>
      <div className='city'>{city}</div>
      <div className='country'>{country}</div>
      
      <div className='cord'>
        <div>
          <span className='lat'>Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className='longt'>Longitude</span>
          <span>{longt}</span>
        </div>
      </div>

      <div className='data-container'>
        <div className='element'>
          <img src={humidityicon} alt='humidity' className='icon' height={50} width={50} />
          <div className='data'>
            <div className='humidity-percent'>{humidity}%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={windicon} alt='wind' className='icon' height={50} width={50} />
          <div className='data'>
            <div className='wind-percent'>{wind} Km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [text, setText] = useState("Tiruppur");
  const [icon, setIcon] = useState(snowicon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("45");
  const [longt, setLongt] = useState("45");
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const search = async () => {
    setLoading(true);
    setCityNotFound(false);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=99df3ebef8bc6aa36ad0304f973f0f27&units=metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();

      if (data.cod === "404") {
        console.error("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLongt(data.coord.lon);

      // Set the icon based on weather condition (simplified)
      switch (data.weather[0].main) {
        case 'Clouds':
          setIcon(cloudicon);
          break;
        case 'Rain':
          setIcon(rainicon);
          break;
        case 'Snow':
          setIcon(snowicon);
          break;
        case 'Drizzle':
          setIcon(drizzle);
          break;
        case 'Clear':
          setIcon(sunicon);
          break;
        default:
          setIcon(cloudicon);
      }

    } catch (error) {
      console.log("An error occurred:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

 useEffect(function() {

 search();

},[]);

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className='cityInput' onChange={handleCityChange} value={text} onKeyDown={handleKeyDown} />
          <div className='search-icon'>
            <img src={searchicon} height={20} width={15} onClick={search} alt="search icon" />
          </div>
        </div>
        {cityNotFound ? (
          <div className="not-found">City not found</div>
        ) : (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            longt={longt}
            wind={wind}
            humidity={humidity}
          />
        )}
      </div>
    </>
  );
}

export default App;
