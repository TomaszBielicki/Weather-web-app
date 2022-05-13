import React from "react";
import { TileWeather, TileList } from "./WeatherTile.styled";

export default function WeatherTile({ data }) {
  return (
    <TileList>
      <TileWeather>Temperatura : {data.jaworzno.current.temp_c}C*</TileWeather>
      <TileWeather>Wilgotność : {data.jaworzno.current.humidity}%</TileWeather>
      <TileWeather>
        Prędkośc wiatru : {data.jaworzno.current.wind_kph}km/h
      </TileWeather>
    </TileList>
  );
}
