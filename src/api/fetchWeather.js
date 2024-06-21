import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e00e91a2ea21b403a0966602e5fb0b9e";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: "metric",
    },
  });

  return data;
};
