import React from "react";
import { CustomButton } from "./ButtomCustom.styled";

export default function ButtonCustom({ children, onClick }) {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
}
