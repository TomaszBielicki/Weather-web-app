import React from "react";
import { CustomTitle } from "./Title.styled";

function Title({ children }) {
  return <CustomTitle>{children}</CustomTitle>;
}

export default Title;
