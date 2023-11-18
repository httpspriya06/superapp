import styles from "./Browwse.module.css";

function Info() {
  const info = JSON.parse(window.localStorage.getItem("userData"));
  const genre = JSON.parse(window.localStorage.getItem("genres"));

  return (
    <div className={styles.purple}>
      <div className="profile">
        <img id={styles.profile} src="./assets/profile.png" alt="" />
      </div>
      <div className={styles.regdata}>
        <p>{info.uname}</p>
        <p>{info.email}</p>
        <p>
          <strong style={{ fontSize: "3rem" }}>{info.username}</strong>
        </p>
        {/* <button>{genre}</button> */}
        <div className={styles.box}>
          {genre.map((category, index) => (
            <button className={styles.Category} key={index}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
