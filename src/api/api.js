import axios from "axios";

const key2 = "4af3be99-b5d2-405f-b5b5-afbe1b40ca97";

const instance = axios.create({
  baseURL: `https://api.open-meteo.com/v1/`,
});

const geoInstance = axios.create({
  withCredentials: true,
  baseURL: `https://geocode-maps.yandex.ru/1.x/`,
});

const sunriseSunset = axios.create({
  withCredentials: true,
  baseURL: `https://api.sunrisesunset.io/json`,
});

export const getSunrise = async (dispatch, latitude, longitude) => {
  try {
    const response = sunriseSunset.get(`?lat=${latitude}&lng=${longitude}`);
    response.then((response) => dispatch(response.data.results.sunrise));
  } catch (err) {
    console.log(err);
  }
};

export const getSunset = async (dispatch, latitude, longitude) => {
  try {
    const response = sunriseSunset.get(`?lat=${latitude}&lng=${longitude}`);
    response.then((response) => dispatch(response.data.results.sunset));
  } catch (err) {
    console.log(err);
  }
};

// 44.5978387,33.5549148 - Sevastopol
export const getLocation = async (dispatch, latitude, longitude) => {
  try {
    const response = geoInstance.get(
      `?apikey=${key2}&geocode=${longitude},${latitude}&autoReverseGeocode=true&kind=locality&results=1&format=json`
    );
    response.then((response) =>
      dispatch(
        response.data.response.GeoObjectCollection.featureMember[0]?.GeoObject
          .name
      )
    );
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentTemp = async (dispatch, latitude, longitude) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&current_weather&timezone=Europe%2FMoscow`
      );
      response.then((response) => dispatch(response.data.current_weather));
    } catch (err) {
      console.log(err + " position");
    }
  }
};

export const getForecast = async (dispatch, latitude, longitude) => {
  try {
    const response = instance.get(
      `forecast?latitude=44.5978387&longitude=33.5549148&current=temperature_2m`
    );
    response.then((response) => dispatch(response.data.current.temperature_2m));
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherCode = async (dispatch, latitude, longitude) => {
  try {
    const response = instance.get(
      `forecast?latitude=44.5978387&longitude=33.5549148&current=weather_code`
    );
    response.then(
      (response) => dispatch(response.data.current.weather_code)
    );
  } catch (err) {
    console.log(err);
  }
};

export const getTimeForecastForDay = async (dispatch, latitude, longitude) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=Europe%2FMoscow&`
      );
      response.then((response) => dispatch(response.data.hourly.time));
    } catch (err) {
      console.log(err);
    }
  }
};

export const getTempForecastForDay = async (dispatch, latitude, longitude) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=Europe%2FMoscow&`
      );
      response.then((response) =>
        dispatch(response.data.hourly.temperature_2m)
      );
    } catch (err) {
      console.log(err);
    }
  }
};

export const getWeatherCodeForHourly = async (
  dispatch,
  latitude,
  longitude
) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&hourly=weathercode&timezone=Europe%2FMoscow&`
      );
      response.then((response) => dispatch(response.data.hourly.weathercode));
    } catch (err) {
      console.log(err);
    }
  }
};

export const getWindSpeedForHourly = async (dispatch, latitude, longitude) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&hourly=windspeed_10m&timezone=Europe%2FMoscow&`
      );
      response.then((response) => dispatch(response.data.hourly.windspeed_10m));
    } catch (err) {
      console.log(err);
    }
  }
};

export const getPrecipitation = async (dispatch, latitude, longitude) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_probability_mean&timezone=Europe%2FMoscow&`
      );
      response.then((response) =>
        dispatch(response.data.daily.precipitation_probability_mean)
      );
    } catch (err) {
      console.log(err);
    }
  }
};

export const getWindSpeedForDay = async (dispatch, latitude, longitude) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&daily=windspeed_10m_max&timezone=Europe%2FMoscow&`
      );
      response.then((response) =>
        dispatch(response.data.daily.windspeed_10m_max)
      );
    } catch (err) {
      console.log(err);
    }
  }
};

export const getTempApparentForDay = async (dispatch, latitude, longitude) => {
  if (typeof latitude === "number" && typeof longitude === "number") {
    try {
      const response = instance.get(
        `forecast?latitude=${latitude}&longitude=${longitude}&daily=apparent_temperature_max&timezone=Europe%2FMoscow&`
      );
      response.then((response) =>
        dispatch(response.data.daily.apparent_temperature_max)
      );
    } catch (err) {
      console.log(err);
    }
  }
};
