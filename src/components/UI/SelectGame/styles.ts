import styled from "styled-components";

export const Container = styled.button`
  border: 3px solid ${(props) => props.border};
  border-radius: 20px;
  background-color: ${props => props.background};
  cursor: pointer;
  padding: .40rem 1.5rem;
  font-style: italic;
  font-weight: 900;
  margin-right: 1.25rem;
  font-size: 12px;
  color: ${(props) => props.color};

  @media (max-width: 767px) {
    margin-top: 1rem;
    padding: .40rem 1.25rem;
  }
`;
