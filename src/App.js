import "./App.css";
import WeatherBox from "./components/WeatherBox";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import SearchBox from "./components/SearchBox";

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCity(`${position.coords.latitude},${position.coords.longitude}`);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="content">
        <SearchBox handleSearch={setCity} message={message} />
        <WeatherBox query={city} setMessage={setMessage} />
      </div>
    );
  }
}

export default App;
