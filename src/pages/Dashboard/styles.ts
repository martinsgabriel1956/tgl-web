import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export const Container = styled.main`
   min-height: calc(100vh - 130px);
`;

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

      @media(max-width: 767px) {
        font-size: 18px;
        margin: 0;
      }
    }
    
    span {
      color: #868686;
      font-size: 17px;
    }
    
    @media(max-width: 767px) {
      flex-direction: column;
      margin-bottom:  1rem;
      padding-left: 0;
    }
  }
  
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const Games = styled.div`
  
`;

export const NewBet = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #b5c401;
  text-decoration: none;
  font-weight: bold;

  padding-right: 10rem;

  @media (max-width: 767px) {
    text-align: center;
    padding: 0;
  }
`;

export const Arrow = styled(FiArrowRight)`
  margin-left: 0.35rem;
  font-size: 25px;
`;

export const LatestGamesContainer = styled.div`
  padding: 2rem 7rem;
  `;

export const LatestGames = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 1rem;
  
  padding-bottom: 1.5rem;
  position: relative;

  &:before {
    content: "";
    background: ${props => props.color};
    position: absolute;
    left: 0;
    height: 90px;
    width: 6px;
    border-radius: 8px;
  }
`;

export const GameNumber = styled.div`
  color: #868686;
  font-weight: bold;
  display: block;
  padding-bottom: .75rem;
`;

export const GameInfo = styled.div`
  color: #868686;
  font-size: 17px;
  font-style: normal;
  padding-bottom: .75rem;
`;

export const GameType = styled.div`
  color: ${props => props.color};
  font-weight: bold;
`; 