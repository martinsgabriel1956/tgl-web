import styled from "styled-components";

export const Container = styled.button`
  border: 3px solid ${(props) => props.color};
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  padding: .40rem 1.5rem;
  font-style: italic;
  font-weight: 900;
  margin-right: 1.25rem;
  font-size: 12px;
  color: ${(props) => props.color};
  

  &:hover {
    background-color: ${props => props.color};
    color: #FFF;
    transition: all .5s;
  }
`;
