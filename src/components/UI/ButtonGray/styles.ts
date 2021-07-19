import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link).attrs(props => {
  return {
    to: props.to,
  };
})`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  padding-top: 1rem;
  text-decoration: none;
  border: none;
  background-color: transparent;
  color: #707070;
  margin: 1rem auto 2rem;

  @media (max-width: 767px) {
    margin: 1rem auto 6rem;
  }
`;
