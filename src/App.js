import React, { useState, useEffect } from "react";

import ForecastHeader from "./components/ForecastHeader/ForecastHeader";
import WeatherTile from "./components/WeatherTile/WeatherTile";
import { getData } from "./data";
import ButtonCustom from "./components/ButtonCustom/ButtonCustom";
import { Background } from "./components/Background/Background.styled";
import { InputBackground } from "./components/Background/InputBackground.styled";
function App() {
  const [data, setData] = useState(getData());
  const [city, setCity] = useState("No Data Yet");

  console.log(data);
  const [refresh, setRefresh] = useState(false);

  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  const handleSubmit = () => {
    console.log("click happend");
    console.log(Object.keys(data));
    const found = Object.keys(data).find((ele) => ele == city);
    if (found) {
      setTemp(data[city]["current"].temp_c);
      setHumidity(data[city]["current"].humidity);
      setWind(data[city]["current"].wind_kph);
    }
  };

  return (
    <Background>
      <ForecastHeader />
      <h1>Enter you city:</h1>
      <InputBackground>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter City Here"
        />
        <ButtonCustom onClick={handleSubmit}>Find!</ButtonCustom>
      </InputBackground>

      <WeatherTile temp={temp} humidity={humidity} wind={wind} />
    </Background>
  );
}

export default App;
