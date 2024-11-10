import { useAnimateUnmount } from "../../../hooks/useAnimateUnmount";
import { ReactPortal } from "../../ReactPortal";
import { Overlay } from "../OverLay";
import { Spinner } from "../Spinner";

type LoaderProps = {
	isLoading: boolean;
};

export function Loader({ isLoading }: LoaderProps) {
	const { shouldRender, elementRef: loaderRef } = useAnimateUnmount(isLoading);

	if (!shouldRender) return null;

	return (
		<ReactPortal containerId="loader-root">
			<Overlay isLeaving={!isLoading} ref={loaderRef}>
				<Spinner />
			</Overlay>
		</ReactPortal>
	);
}
