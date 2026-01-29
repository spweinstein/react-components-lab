import WeatherIcon from "./WeatherIcon.jsx";

const WeatherData = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
      <p>
        <span>Conditions: </span>
        {forecast.conditions[0].toUpperCase() + forecast.conditions.slice(1)}
      </p>
      <p>
        <span>Time: </span>
        {forecast.time}
      </p>
    </div>
  );
};

export default WeatherData;
