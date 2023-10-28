import Info from "../components/Browwse/Info";
import WeatherPage from "../components/Browwse/WeatherPage";
import News from "../components/Browwse/News";
function Browwse() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Info />
        <WeatherPage />
      </div>
      <News />
    </div>
  );
}
export default Browwse;
