import React from "react";
import { TileWeather, TileList } from "./WeatherTile.styled";
import {
  WiDaySunny,
  WiRaindrop,
  WiCelsius,
  WiCloudyGusts,
} from "weather-icons-react";

export default function WeatherTile({ temp, humidity, wind }) {
  return (
    <TileList>
      <TileWeather>
        <WiDaySunny size={65} /> : {temp}
        <WiCelsius size={85} />
      </TileWeather>
      <TileWeather>
        <WiRaindrop size={65} />: {humidity}%
      </TileWeather>
      <TileWeather>
        <WiCloudyGusts size={65} /> : {wind}km/h
      </TileWeather>
    </TileList>
  );
}
