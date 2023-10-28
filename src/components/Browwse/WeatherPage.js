import { useEffect, useState } from "react";
import styles from "./Browwse.module.css";

function WeatherPage() {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = "8e384718f53c48dd9cd101047232810";

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const defaultLocation = "Haryana";

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${defaultLocation}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [apiKey]);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      var hours = now.getHours();
      var minutes = now.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;

      var day = now.getDate();
      var month = now.getMonth() + 1;
      var year = now.getFullYear();
      var strDate = day + "-" + month + "-" + year;

      setTime(strTime);
      setDate(strDate);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={styles.datetime}>
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className={styles.weather}>
        <div>
          <img
            id={styles.icon}
            src={weatherData.current?.condition?.icon}
            alt={weatherData.current?.condition?.text}
          />
          <p>{weatherData.current?.condition?.text}</p>
        </div>
        <div className={styles.line}>|</div>
        <div className={styles.temp}>
          <p>
            {weatherData.current?.temp_c}°C
            <p>
              <span>
                <img id={styles.pressure} src="./assets/vector.png" alt="" />
              </span>
              {weatherData.current?.pressure_mb} mbar Pressure
            </p>
          </p>
        </div>
        <div className={styles.line}>|</div>

        <div className={styles.humid}>
          <p>
            <span>
              <img id={styles.wind} src="./assets/wind.png" alt="" />
            </span>
            {weatherData.current?.wind_kph} km/h
          </p>

          <p>
            <span>
              <img id={styles.drop} src="./assets/group.png" alt="" />
            </span>
            {weatherData.current?.humidity}% humidity
          </p>
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
