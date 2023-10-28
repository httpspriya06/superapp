import { useEffect, useState } from "react";
import styles from "./Browwse.module.css";

function News() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [newsData, setNewsData] = useState([]);
  const apiKey = "a0caa1d35646419f9c694dc94fad7a1b";

  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setNewsData(data.articles);
        } else {
          console.error("Error fetching news data:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

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
    <div className={styles.cont2}>
      <div className={styles.section}>
        {newsData.map((article, index) => (
          <div key={index}>
            <img
              id={styles.News}
              src={article.urlToImage}
              alt={article.title}
            />
            <div className={styles.title}>
              <h2>{article.title}</h2>
              <br></br>
              <p>
                {date}
                <span>|</span>
                <span>{time}</span>
              </p>
            </div>
            <p className={styles.description}>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default News;
