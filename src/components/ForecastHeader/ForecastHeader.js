import React from "react";
import { HeaderStyle } from "./ForecastHeader.styled";
import { HeaderTile } from "./ForecastHeader.styled";

export default function ForecastHeader() {
  return (
    <HeaderStyle>
      <HeaderTile>Home</HeaderTile>
      <HeaderTile>Map</HeaderTile>
      <HeaderTile>Alerts</HeaderTile>
      <HeaderTile>News</HeaderTile>
    </HeaderStyle>
  );
}
