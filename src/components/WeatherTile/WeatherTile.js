import React from "react";
import { TileWeather } from "./WeatherTile.styled";

export default function WeatherTile({ data }) {
  return (
    <>
      <TileWeather>Temperatura : {data.jaworzno.current.temp_c}</TileWeather>
      <TileWeather>Wilgotność : {data.jaworzno.current.humidity}</TileWeather>
      <TileWeather>
        Prędkośc wiatru : {data.jaworzno.current.wind_kph}
      </TileWeather>
    </>
  );
}
