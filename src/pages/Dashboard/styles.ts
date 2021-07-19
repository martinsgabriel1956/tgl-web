import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export const RecentGames = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5rem;

    h2 {
      font-size: 24px;
      text-transform: uppercase;
      color: #707070;
      margin-right: 3.5rem;
    }

    span {
      color: #868686;
      font-size: 17px;
    }
  }
`;

export const Games = styled.div``;

export const NewBet = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #b5c401;
  text-decoration: none;
  font-weight: bold;

  padding-right: 10rem;
`;

export const Arrow = styled(FiArrowRight)`
  margin-left: 0.35rem;
  font-size: 25px;
`;
