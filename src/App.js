import { useEffect, useState } from "react";
import "./App.css";
import { getForecast, getWeatherCode } from "./api/api";
import dayGif from "./assets/day.gif"
import nightGif from "./assets/night.gif";
import { returnCurrBG, returnIsDay } from "./common/weatherHelpers";

const App = () => {
  const tg = window.Telegram.WebApp;

  const [weather, setWeather] = useState([]);
  const [weatherCode, setWeatherCode] = useState();
  const [isDay, setIsDay] = useState(true);

  const location = [{ latitude: 44.5978387, longitude: 33.5549148 }];

  useEffect(() => {
    getForecast(setWeather);
    getWeatherCode(setWeatherCode);
  }, []);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();

  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    returnIsDay(hour, setIsDay);
  }, []);

  const dayBG = isDay ? <img src={dayGif} className="bg" /> : null;
  const nightBG = !isDay ? <img src={nightGif} className="bg" /> : null;

  return (
    <div className="App" onClick={onClose}>
      {dayBG || nightBG}
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
