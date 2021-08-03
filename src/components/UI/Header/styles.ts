import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #ebebeb;
  padding: 0.75rem 2rem 0.5rem;

  a {
    color: #707070;
    font-weight: 600;
    text-decoration: none;
    padding-right: 4rem;

    @media (max-width: 900px) {
      padding: 0 0 0 0.5rem;
      font-size: 17px;
    }
  }

  @media (max-width: 767px) {
    padding: 1rem 1.5rem 0.5rem;
  }
`;

export const Logo = styled.nav`
  padding-left: 6rem;
  margin-right: 4rem;
  color: #707070;
  font-size: 1.75rem;

  position: relative;

  &:after {
    content: "";
    position: absolute;

    background-color: #b5c401;
    top: 42px;
    left: 78px;

    width: 60%;
    height: 18%;

    border-radius: 2rem;

    @media (max-width: 767px) {
      left: -8px;
      padding: 0 0.25rem;

      width: 40%;
      height: 18%;
      padding: 0 1.75rem;
    }

    @media (min-width: 768px) and (max-width: 840px) {
      top: 46px;
      left: 40px;
      width: 70%;
    }
    @media (min-width: 841px) and (max-width: 901px) {
      top: 46px;
      left: 42px;
      width: 70%;
    }
  }

  @media (max-width: 767px) {
    padding: 0;
  }

  @media (min-width: 841px) and (max-width: 901px) {
    padding-left: 3.25rem;
  }

  @media (min-width: 768px) and (max-width: 840px) {
    padding-left: 3rem;
  }

  a {
    padding: 0 2rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    font-size: 17px;
  }
`;

export const LogoContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #707070;
  font-weight: 600;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  font-style: italic;
  padding-right: 6rem;

  @media (max-width: 900px) {
    padding: 0;
    font-size: 17px;
  }
`;

export const Arrow = styled(FiArrowRight)`
  margin-left: 0.5rem;
  font-size: 25px;

  @media (max-width: 767px) {
    display: none;
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