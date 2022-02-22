import React from "react";
import { useState, useEffect } from "react";
import getDataFecth from "../common/getDataFecth";
import { WiCloudyWindy, WiCloudy, WiThermometer } from "react-icons/wi";
import { AiOutlineCloudUpload } from "react-icons/ai";
// import { ImLocation2 } from "react-icons/im";

const WeatherBox = ({ query, setMessage }) => {
  const [isDegrees, setIsDegrees] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [icon, setIcon] = useState("");
  const [text, setText] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [clouds, setClouds] = useState("");
  const [pressure, setPressure] = useState("");
  const [update, setUpdate] = useState("");
  const [temps, setTemps] = useState({
    temp_c: 0,
    temp_f: 0,
  });

  useEffect(() => {
    if (query) {
      getDataFecth(query).then((resp) => {
        if (resp.error) {
          setMessage("The city is not Exist");
        } else {
          setMessage("");
          setCountry(resp.location.country);
          setCity(resp.location.name);
          setRegion(resp.location.region);
          setIcon(resp.current.condition.icon);
          setText(resp.current.condition.text);
          setWindspeed(resp.current.wind_kph);
          setClouds(resp.current.cloud);
          setPressure(resp.current.pressure_mb);
          setUpdate(resp.current.last_updated);
          setTemps({
            temp_c: resp.current.temp_c,
            temp_f: resp.current.temp_f,
          });
        }
      });
    }
  }, [query, setMessage]);

  return (
    <div className="card">
      <h2>Weather App</h2>
      <h4>
        {country} {city} {region}
      </h4>
      <div className="card-content">
        <div className="card-content-left">
          <img src={icon} alt="iconWeather" />
          <span>{isDegrees ? temps.temp_f + " °F" : temps.temp_c + " °C"}</span>
        </div>
        <div className="card-content-right">
          <p>{text}</p>
          <p>
            <WiCloudyWindy className="icon-img" />
            Wind Speed: {windspeed}
          </p>
          <p>
            <WiCloudy className="icon-img" />
            Clouds: {clouds}
          </p>
          <p>
            <WiThermometer className="icon-img" />
            Pressure: {pressure}
          </p>
          <p>
            <AiOutlineCloudUpload className="icon-img" />
            Last Update: {update}
          </p>
        </div>
      </div>

      <div className="btn-content">
        <button
          className="btn"
          onClick={() => {
            isDegrees ? setIsDegrees(false) : setIsDegrees(true);
          }}
        >
          Degrees °F/°C
        </button>
      </div>
    </div>
  );
};

export default WeatherBox;
