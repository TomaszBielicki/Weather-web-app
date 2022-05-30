import styled from "styled-components";
import img from "../../Assets/lake-background.jpeg";

export const Background = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0px;
  border: 0px;
  padding: 0px;
  padding-top: 20px;
  height: 100vh;
  width: auto;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: black;
`;

// no-repeat 50% 40% / cover
