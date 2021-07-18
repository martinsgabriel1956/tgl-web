import styled from "styled-components";

export const Container = styled.section`
  width: 352px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 16px;
  box-shadow: 0px 3px 25px #00000014;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 35px;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    padding-top: 1rem;
    text-decoration: none;

    &:nth-child(1) {
      padding-top: 0.5rem;
      padding-bottom: 1rem;
      font-weight: normal;
      color: #c1c1c1;
      text-decoration: none;
      margin-bottom: 1rem;
      font-size: 17px;
      justify-content: flex-end;
      margin-right: 1.5rem;
    }
  }
`;
