import styled from "styled-components";

type SpinnerProps = {
	size: number;
};

export const Container = styled.div`
  width: ${({ size }: SpinnerProps) => size}px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #0000;
  border-right-color: #b5c401;
  position: relative;
  animation: l24 1s infinite linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 2s;
  }
  &::after {
    animation-duration: 4s;
  }
  @keyframes l24 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
