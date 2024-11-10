import type { MouseEventHandler, ReactNode } from "react";

import { Container } from "./styles";

interface NumbersGameProps {
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	value: string | number | readonly string[] | undefined;
	color?: string;
}

export function NumbersGame(props: NumbersGameProps) {
	return (
		<Container color={props.color} value={props.value} onClick={props.onClick}>
			{props.children}
		</Container>
	);
}
