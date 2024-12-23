import "../App.css";
import sunnyGif from "../assets/sunnyGif.gif";
import cloudyGif from "../assets/cloudyGif.gif";
import mistGif from "../assets/mistGif.gif";
import rainGif from "../assets/rainGif.gif";
import thunderGif from "../assets/thunderWithRain.gif";
import snowGif from "../assets/snowGif.gif";

// export const isDayNow = (setIsDay, hour, sunrise, sunset) => {
//   if (sunrise !== null && sunrise !== undefined) {
//     const sliceSunrise = sunrise?.slice(0, 2);
//     const currHourSunrise = sliceSunrise.replace(/:/gi, "");

//     const sliceSunsety = sunset?.slice(0, 2);
//     const hourSunset12h = sliceSunset.replace(/:/gi, "");
//     const currHourSunset = Number(hourSunset12h) + 12;

//     if (hour >= Number(currHourSunset) || hour <= Number(currHourSunrise)) {
//       setIsDay(false);
//     } else {
//       setIsDay(true);
//     }
//   }
// };

export const isCurrHour = (currHour, hour) => {
  const sliceHour = hour.slice(11, 13);
  const fullHour = 0 + currHour;

  if (currHour.length === 1) {
    return sliceHour == fullHour;
  } else {
    return sliceHour == currHour;
  }
};

export const returnIsDay = (currHour, setIsDay) => {
  if (currHour > 17 || currHour < 6) {
    return setIsDay(false);
  } else {
    return setIsDay(true);
  }
};

export const isCondition = (weatherCode) => {
  if (weatherCode === 0 || weatherCode === 1) {
    return "Ясно";
  } else if (weatherCode === 2) {
    return "Облачно";
  } else if (weatherCode === 3) {
    return "Пасмурно";
  } else if (weatherCode === 45 || weatherCode === 48) {
    return "Туман";
  } else if (
    weatherCode === 51 ||
    weatherCode === 53 ||
    weatherCode === 55 ||
    weatherCode === 56 ||
    weatherCode === 57 ||
    weatherCode === 61 ||
    weatherCode === 63 ||
    weatherCode === 65 ||
    weatherCode === 80 ||
    weatherCode === 81 ||
    weatherCode === 82
  ) {
    return "Дождь";
  } else if (weatherCode === 66 || weatherCode === 67) {
    return "Ледяной дождь";
  } else if (
    weatherCode === 71 ||
    weatherCode === 73 ||
    weatherCode === 75 ||
    weatherCode === 77 ||
    weatherCode === 85 ||
    weatherCode === 86
  ) {
    return "Снег";
  } else if (weatherCode === 95) {
    return "Гроза";
  } else if (weatherCode === 96 || weatherCode === 99) {
    return "Гроза с осадками";
  }
};

export const weekday = (day) => {
  if (day === 0 || day === 7) {
    return "Воскресенье";
  } else if (day === 1 || day === 8) {
    return "Понедельник";
  } else if (day === 2 || day === 9) {
    return "Вторник";
  } else if (day === 3 || day === 10) {
    return "Среда";
  } else if (day === 4 || day === 11) {
    return "Четверг";
  } else if (day === 5 || day === 12) {
    return "Пятница";
  } else if (day === 6 || day === 13) {
    return "Суббота";
  }
};

export const isConditionForCurrDay = (selectDay, weatherCode) => {
  if (selectDay === 0) {
    return isCondition(weatherCode[0]);
  } else if (selectDay === 1) {
    return isCondition(weatherCode[1]);
  } else if (selectDay === 2) {
    return isCondition(weatherCode[2]);
  } else if (selectDay === 3) {
    return isCondition(weatherCode[3]);
  } else if (selectDay === 4) {
    return isCondition(weatherCode[4]);
  } else if (selectDay === 5) {
    return isCondition(weatherCode[5]);
  } else if (selectDay === 6) {
    return isCondition(weatherCode[6]);
  }
};

export const currData = (data, selectDay, callback) => {
  if (selectDay === 0) {
    return callback(data.slice(0, 24));
  } else if (selectDay === 1) {
    return callback(data.slice(24, 48));
  } else if (selectDay === 2) {
    return callback(data.slice(48, 72));
  } else if (selectDay === 3) {
    return callback(data.slice(72, 96));
  } else if (selectDay === 4) {
    return callback(data.slice(96, 120));
  } else if (selectDay === 5) {
    return callback(data.slice(120, 144));
  } else if (selectDay === 6) {
    return callback(data.slice(144, 168));
  }
};

export const currToDay = (selectDay, currDay) => {
  if (selectDay === 0) {
    return weekday(currDay);
  } else if (selectDay === 1) {
    return weekday(currDay + 1);
  } else if (selectDay === 2) {
    return weekday(currDay + 2);
  } else if (selectDay === 3) {
    return weekday(currDay + 3);
  } else if (selectDay === 4) {
    return weekday(currDay + 4);
  } else if (selectDay === 5) {
    return weekday(currDay + 5);
  } else if (selectDay === 6) {
    return weekday(currDay + 6);
  }
};

export const kmHInMS = (num) => {
  const result = (num / 3600) * 1000;
  return result.toFixed(1);
};

export const currWindForDay = (data, selectDay) => {
  if (selectDay === 0) {
    return kmHInMS(data[0]);
  } else if (selectDay === 1) {
    return kmHInMS(data[1]);
  } else if (selectDay === 2) {
    return kmHInMS(data[2]);
  } else if (selectDay === 3) {
    return kmHInMS(data[3]);
  } else if (selectDay === 4) {
    return kmHInMS(data[4]);
  } else if (selectDay === 5) {
    return kmHInMS(data[5]);
  } else if (selectDay === 6) {
    return kmHInMS(data[6]);
  }
};

export const currDataForDay = (data, selectDay) => {
  if (selectDay === 0) {
    return data[0];
  } else if (selectDay === 1) {
    return data[1];
  } else if (selectDay === 2) {
    return data[2];
  } else if (selectDay === 3) {
    return data[3];
  } else if (selectDay === 4) {
    return data[4];
  } else if (selectDay === 5) {
    return data[5];
  } else if (selectDay === 6) {
    return data[6];
  }
};

const sunnyImg = <img className="img_curr_weather" src={sunnyGif} />;
const mistImg = <img className="img_curr_weather" src={mistGif} />;
const cloudyImg = <img className="img_curr_weather" src={cloudyGif} />;
const rainImg = <img className="img_curr_weather" src={rainGif} />;
const thunderyOutbreaksImg = <img className="img_curr_weather" src={thunderGif} />;
const snowImg = <img className="img_curr_weather" src={snowGif} />;

export const returnCurrBG = (weatherCode) => {
  if (weatherCode === 0 || weatherCode === 1) {
    return sunnyImg;
  } else if (weatherCode === 2 || weatherCode === 3) {
    return cloudyImg;
  } else if (weatherCode === 45 || weatherCode === 48) {
    return mistImg;
  } else if (
    weatherCode === 51 ||
    weatherCode === 53 ||
    weatherCode === 55 ||
    weatherCode === 56 ||
    weatherCode === 57 ||
    weatherCode === 61 ||
    weatherCode === 63 ||
    weatherCode === 65 ||
    weatherCode === 66 ||
    weatherCode === 67 ||
    weatherCode === 80 ||
    weatherCode === 81 ||
    weatherCode === 82
  ) {
    return rainImg;
  } else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
    return thunderyOutbreaksImg;
  } else if (
    weatherCode === 71 ||
    weatherCode === 73 ||
    weatherCode === 75 ||
    weatherCode === 77 ||
    weatherCode === 85 ||
    weatherCode === 86
  ) {
    return snowImg;
  }
};
