import Info from "../components/Browwse/Info";
import WeatherPage from "../components/Browwse/WeatherPage";
import News from "../components/Browwse/News";
import Notes from "../components/Browwse/Notes";

import { useNavigate } from "react-router-dom";
function Browwse() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Info />
        <WeatherPage />
      </div>
      <div style={{ position: "absolute", top: "10rem", left: "80rem" }}>
        <Notes />
      </div>
      <News />
      <div>
        <button
          style={{
            position: "absolute",
            bottom: "2vh",
            right: "3vw",
            background: "green",
            border: "none",
            color: "white",
            padding: "6px",
            borderRadius: "12px",
          }}
          onClick={handleClick}
        >
          Browse
        </button>
      </div>
    </div>
  );
}
export default Browwse;
