import React from "react";
import { CustomInput } from "./InputCustom.styled";
export default function InputCustom({ onChange, type, placeholder }) {
  return (
    <CustomInput onChange={onChange} type={type} placeholder={placeholder} />
  );
}
