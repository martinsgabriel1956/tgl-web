import styled from "styled-components";

import { FiEdit } from "react-icons/fi";

export const Container = styled.div`
  section {
    min-height: calc(100vh - 130px);
    height: 100vh;
    justify-content: center;

    padding: 4rem 6rem;

    h2,
    p {
      padding-bottom: 1rem;
    }

    p {
      color: #707070;
      font-weight: 500;
    }

    img {
      width: 500px;
      height: 400px;
    }

    @media (min-width: 500px) and (max-width: 768px) {
      padding: 3rem 4rem;

      img {
        width: 400px;
        height: 300px;
      }
    }

    @media (min-width: 500px) and (max-width: 680px) {
      img {
        width: 400px;
        height: 250px;
      }
    }

    @media (min-width: 501px) and (max-width: 534px) {
      padding: 3rem 2rem;
      img {
        width: 400px;
        height: 250px;
      }
    }

    @media (min-width: 320px) and (max-width: 424px) {
      padding: 3rem 3rem;
      img {
        width: 200px;
        height: 175px;
      }
    }

    @media (min-width: 425px) and (max-width: 485px) {
      padding: 2rem 3rem;

      img {
        width: 400px;
        height: 200px;
      }
    }

    @media (min-width: 486px) and (max-width: 499px) {
      padding: 2rem 3rem;
      img {
        width: 400px;
        height: 225px;
      }
    }

    @media (min-width:769px) and (max-width: 1024px) {
      padding: 2rem 3rem;

      img {
        width: 400px;
        height: 350px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

export const AddForm = styled.button`
  background-color: transparent;
  border: none;

  color: #b5c401;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem;

  cursor: pointer;

  &:active,
  &:hover {
    border: 2px solid #b5c401;
    border-radius: 4px;
  }

  @media (min-width: 320px) and (max-width: 682px) {
    margin-top: 1rem;
  }
`;

export const EditIcon = styled(FiEdit)`
  margin-right: 0.25rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
  @media (min-width: 320px) and (max-width: 682px) {
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const UserInfo = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 25px #00000014;

  @media (min-width: 320px) and (max-width: 348px) {
    padding: 2rem .5rem;
  }
  
  @media (min-width: 349px) and (max-width: 370px) {
    padding: 2rem 1rem;

  }
`;

export const EditInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
