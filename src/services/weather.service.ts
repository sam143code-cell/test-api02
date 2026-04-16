import axios from "axios";

export const getWeather = () => {
  return axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=API_KEY_123"
  );
};