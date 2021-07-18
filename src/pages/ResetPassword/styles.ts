import styled from "styled-components";

import { FiArrowRight } from "react-icons/fi";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-around;

  h2 {
    font-size: 35px;
    color: #707070;
    text-align: center;
    padding: 0 1.25rem 1.25rem;

    @media (max-width: 767px) {
      font-size: 25px;
      padding: 1rem 0 1.25rem;
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
  }
`;

export const Arrow = styled(FiArrowRight)`
  font-size: 3rem;
`;
