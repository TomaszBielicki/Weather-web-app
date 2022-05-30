import React, { useState, useEffect } from "react";

import ForecastHeader from "./components/ForecastHeader/ForecastHeader";
import WeatherTile from "./components/WeatherTile/WeatherTile";
import { getData } from "./data";
import ButtonCustom from "./components/ButtonCustom/ButtonCustom";
import { Background } from "./components/Background/Background.styled";
import { InputBackground } from "./components/Background/InputBackground.styled";
import Title from "./components/Title/Title";
import { TitleCity } from "./components/Title/Title.styled";
import InputCustom from "./components/InputCustom/InputCustom";
import Line from "./components/Line/Line";

const API_KEY = "53290998ea334cafbf1183417221005";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("No Data Yet");

  const [cityTitle, setCityTitle] = useState("");

  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCity(data.location.name);
      });
  }, [city]);

  const handleSubmit = () => {
    const capitalize = (cityName) => {
      return cityName[0].toUpperCase() + cityName.slice(1);
    };

    if (data) {
      setCityTitle(capitalize(city));
      setTemp(data["current"].temp_c);
      setHumidity(data["current"].humidity);
      setWind(data["current"].wind_kph);
    } else {
      setCityTitle("There is no city with name " + city);
      setTemp("");
      setHumidity("");
      setWind("");
    }
  };

  return (
    <Background>
      <ForecastHeader />
      <Title>Enter your city:</Title>
      <Line />
      <InputBackground>
        <InputCustom
          onChange={(e) => setCity(e.target.value.toLowerCase())}
          type="text"
          placeholder="Enter City Here"
        />
        <ButtonCustom onClick={handleSubmit}>Find!</ButtonCustom>
      </InputBackground>
      <TitleCity>{cityTitle}</TitleCity>
      <WeatherTile temp={temp} humidity={humidity} wind={wind} />
    </Background>
  );
}

export default App;
