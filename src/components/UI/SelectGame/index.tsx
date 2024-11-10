import type { MouseEventHandler, ReactNode } from "react";

import { Container } from "./styles";
declare module "react" {
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		background?: string;
		border?: string;
	}
}

interface SelectGameProps {
	children: ReactNode;
	color?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	background?: string;
	border?: string;
	disabled?: boolean | undefined;
}

export function SelectGame({ children, ...props }: SelectGameProps) {
	return (
		<Container
			background={props.background}
			border={props.border}
			disabled={props.disabled}
			{...props}
		>
			{children}
		</Container>
	);
}
