import "./WeatherForecast.css";
import WeatherData from "./WeatherData.jsx";

const WeatherForecast = ({ forecast }) => {
  return <WeatherData forecast={forecast} />;
};

export default WeatherForecast;
