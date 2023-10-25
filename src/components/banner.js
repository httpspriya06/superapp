import styles from "./Banner.module.css";
// import BackgroundImage from "../images/Pop.png";
const Banner = () => {
  return (
    <>
      <div className={styles.bottom}>
        <h1>Discover new things on</h1>
        <h2> Superpp</h2>
      </div>
      <img id="pop" src="./assets/Pop.png" alt="" />
    </>
  );
};

export default Banner;
