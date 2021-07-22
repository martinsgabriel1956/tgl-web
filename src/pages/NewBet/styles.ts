import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 1rem;

  section:nth-child(1) {
    padding: 4rem 7rem;

    @media (max-width: 767px) {
      padding: 4rem 1rem;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;