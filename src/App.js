import { useEffect, useState } from 'react';
import './App.css';
import { getForecast } from './api/api';

const App = () => {
  const tg = window.Telegram.WebApp

  const [weather, setWeather] = useState([])

  const location = [{latitude: 44.5978387, longitude: 33.5549148}]

  useEffect(() => {
    getForecast(setWeather, location.latitude, location.longitude)
  }, [])

  console.log(weather);
  

  return (
    <div className="App">
      <h1>{weather}<span>℃</span></h1>
    </div>
  );
}

export default App;
