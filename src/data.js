import dataJaworzno from "./Mocks/dataJaworzno.json";
import dataLosAngeles from "./Mocks/dataLosAngeles.json";

export const getData = () => {
  return {
    jaworzno: dataJaworzno,
    losangeles: dataLosAngeles,
  };
};
