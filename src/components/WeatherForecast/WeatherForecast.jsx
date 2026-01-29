import "./WeatherForecast.css";

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt="" />
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

export default WeatherForecast;
