import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  min-height: calc(100vh - 130px);

  section:nth-child(1) {
    padding: 4rem 7rem;

    @media (max-width: 767px) {
      padding: 4rem 1rem;
    }

    @media (min-width: 768px) and (max-width: 900px) {
      padding: 4rem 2rem;
    }

    @media (min-width: 900px) and (max-width: 1220px) {
      padding: 4rem;
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
