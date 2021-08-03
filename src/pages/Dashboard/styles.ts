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

      @media (min-width: 768px) and (max-width: 840px) {
        margin-right: 1.25rem;
    }
    }
    
    span {
      color: #868686;
      font-size: 17px;
    }
    
    @media(max-width: 767px) {
      flex-direction: column;
      margin-bottom: 1rem;
      padding-left: 0;
    }

    @media(min-width: 841px) and (max-width: 901px) {
      padding-left: 3rem;
    }

    @media (min-width: 768px) and (max-width: 840px) {
      padding-left: 2rem;
    }
  }
  
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    padding: 4rem 1rem 0.5rem;
  }
`;

export const Games = styled.div`
  @media (max-width: 767px) {
    flex-direction: column;
  }
  
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

  @media (min-width: 768px) and (max-width: 840px) {
    padding-right: 0;
    padding-left: 1rem;
  }
`;

export const Arrow = styled(FiArrowRight)`
  margin-left: 0.35rem;
  font-size: 25px;
`;

export const LatestGamesContainer = styled.div`
  padding: 2rem 7rem;
  
  @media (max-width: 767px) {
    padding: 2.75rem 4rem;
  }
  `;

export const LatestGames = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 1rem;
  
  padding-bottom: 2rem;
  position: relative;

  &:before {
    content: "";
    background: ${props => props.color};
    position: absolute;
    left: 0;
    height: 90px;
    width: 6px;
    border-radius: 8px;
    
    @media (max-width: 590px) {
      height: calc(90px + 26px);
    }
  }

  img {
    width: 500px;
    height: 500px;
    text-align: center;
    
    @media (max-width: 590px) {
      width: 350px;
      height: 350px;
    }

    @media (min-width: 320px) and (max-width: 369px) {
      width: 240px;
      height: 240px;
    }

    @media (min-width: 360px) and (max-width: 379px) {
      width: 280px;
      height: 280px;

    }

    @media (min-width: 380px) and (max-width: 434px) {
      width: 300px;
      height: 300px;
    }

    @media (min-width: 405px) and (max-width: 435px) {
      width: 325px;
      height: 325px;
    }
  }

  @media (min-width: 320px) and (max-width: 374px) {
    padding-left: .5rem;
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