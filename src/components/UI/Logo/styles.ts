import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 65px;
  color: #707070;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  div:nth-child(2) {
    font-size: 22px;
    color: #fff;
    background-color: #b5c401;

    margin: 2rem 7rem;
    padding: 0.5rem 0;

    border-radius: 1.5rem;
    text-align: center;
  }

  p {
    text-transform: uppercase;
    font-size: 83px;
  }
`;
