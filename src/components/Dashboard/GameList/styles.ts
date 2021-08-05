import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

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

      @media (max-width: 767px) {
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

    @media (max-width: 767px) {
      flex-direction: column;
      margin-bottom: 1rem;
      padding-left: 0;
    }

    @media (min-width: 841px) and (max-width: 901px) {
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

export const Arrow = styled(FiArrowRight)`
  margin-left: 0.35rem;
  font-size: 25px;
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

export const LatestGamesContainer = styled.div`
  padding: 2rem 7rem;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 2.75rem 2rem;
  }

`;

export const LatestGames = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 1rem;
  max-width: 230px;
  overflow-wrap: break-word;
  
  padding-bottom: 2rem;
  position: relative;
  
  &:before {
    content: "";
    background: ${(props) => props.color};
    position: absolute;
    left: 0;
    height: 90px;
    width: 6px;
    border-radius: 8px;
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
  `;

export const GameNumber = styled.div`
  color: #868686;
  font-weight: bold;
  display: block;
  padding-bottom: 0.75rem;

  @media (min-width: 320px) and (max-width: 349px) {
    max-width: 250px;
    overflow-wrap: break-word;

  }
  
  @media (min-width: 350px) and (max-width: 420px) {
    max-width: 300px;
    overflow-wrap: break-word;
  }
`;

export const GameInfo = styled.div`
  color: #868686;
  font-size: 17px;
  font-style: normal;
  padding-bottom: 0.75rem;
`;

export const GameType = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const GamesPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PageNumbers = styled.span`
  padding: 0.5rem 1rem;
  border: 1px solid #868686;
  border-radius: 8px;
  font-size: 1.5rem;
  margin: 0 1rem;
  color: #b5c401;
  font-weight: bold;
`;

export const PreviousPage = styled.button`
  font-size: 2.5rem;
  color: #b5c401;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NextPage = styled.button`
  font-size: 2.5rem;
  color: #b5c401;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
