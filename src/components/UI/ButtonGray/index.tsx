import { ReactNode, FC } from "react";

import { Container } from "./styles";

type ButtonProps = {
  children: ReactNode;
  to: string;
};

export const ButtonGray: FC<ButtonProps> = (props) => {
  return <Container {...props}>{props.children}</Container>;
};
