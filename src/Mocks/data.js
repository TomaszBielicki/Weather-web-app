import dataJaworzno from "./dataJaworzno.json";
import dataLosAngeles from "./dataLosAngeles.json";

export const getData = () => {
  return {
    jaworzno: dataJaworzno,
    losangeles: dataLosAngeles,
  };
};
