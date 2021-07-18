import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link).attrs((props) => {
  return {
    to: props.to,
  };
})`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  padding-top: 1rem;
  text-decoration: none;
  color: ${props => props.className === "primary" ? '#b5c401' : '#707070'};
  margin: 1rem 0 2rem;

  &.gray {
    @media (max-width: 767px) {
      padding-bottom: 1rem;
    }
  }
`;
