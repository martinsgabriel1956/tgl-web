import { forwardRef } from "react";
import { Container } from "./styles";

type OverlayProps = {
	children: JSX.Element;
	isLeaving?: boolean;
};

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
	({ children, isLeaving }, ref) => {
		return (
			<Container ref={ref} isLeaving={isLeaving}>
				{children}
			</Container>
		);
	},
);
