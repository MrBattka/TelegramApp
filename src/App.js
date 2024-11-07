import { useEffect, useState } from "react";
import "./App.css";
import { getForecast, getWeatherCode } from "./api/api";
import image from './assets/thunderWithRain.gif'
import { returnCurrBG } from "./common/weatherHelpers";

const App = () => {
  const tg = window.Telegram.WebApp;

  const [weather, setWeather] = useState([]);
  const [weatherCode, setWeatherCode] = useState()

  const location = [{ latitude: 44.5978387, longitude: 33.5549148 }];

  useEffect(() => {
    getForecast(setWeather);
    getWeatherCode(setWeatherCode)
  }, []);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const onClose = () => {
    tg.close();
  };

  const isCloudy = weatherCode === 2 ? <img src={image} className="bg" /> : null

  
  return (
    <div className="App" onClick={onClose}>
      {returnCurrBG(weatherCode)}
      <div className="date">{`${day}.${month}.${year}`}</div>
      <h1>
        {weather}
        <span>℃</span>
      </h1>
    </div>
  );
};

export default App;
