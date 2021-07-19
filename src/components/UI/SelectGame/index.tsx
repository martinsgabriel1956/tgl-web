import { ReactNode, MouseEventHandler } from 'react';

import { Container } from './styles';

interface SelectGameProps {
  children: ReactNode;
  color: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function SelectGame({ children, ...props }: SelectGameProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};


