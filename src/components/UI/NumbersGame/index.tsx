import { ReactNode, RefObject, MouseEventHandler } from 'react';

import { Container } from './styles';

interface NumbersGameProps {
  children: ReactNode;
  ref: RefObject<HTMLButtonElement>
  onClick?: MouseEventHandler<HTMLButtonElement>;
  value: number
}

export function NumbersGame(props: NumbersGameProps) {
  return (
    <Container>
      {props.children}
    </Container>
  );
};


