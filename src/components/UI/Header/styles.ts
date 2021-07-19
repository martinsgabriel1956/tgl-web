import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

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
  }
`;

export const Logo = styled.nav`
  padding-left: 6rem;
  color: #707070;
  font-size: 1.75rem;

  position: relative;

  &:after {
    content: "";
    position: absolute;

    background-color: #b5c401;
    top: 52px;
    left: 82px;

    width: 60%;
    height: 18%;

    border-radius: 2rem;
  }

  a {
    padding: 0 2rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const Arrow = styled(FiArrowRight)`
  margin-left: 0.5rem;
  font-size: 25px;
`;
