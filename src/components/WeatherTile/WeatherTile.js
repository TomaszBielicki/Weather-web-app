import React, { useState } from "react";
import { TileWeather, TileList } from "./WeatherTile.styled";

export default function WeatherTile({ temp, humidity, wind }) {
  return (
    <TileList>
      <TileWeather>Temperatura : {temp}C*</TileWeather>
      <TileWeather>Wilgotność : {humidity}%</TileWeather>
      <TileWeather>Prędkośc wiatru : {wind}km/h</TileWeather>
    </TileList>
  );
}
