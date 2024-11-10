import { useEffect, useRef, useState } from "react";

export function useAnimateUnmount(visible) {
	const [shouldRender, setShouldRender] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		if (visible) {
			setShouldRender(true);
		}

		function handleAnimationEnd() {
			return () => {
				setShouldRender(false);
			};
		}

		const overlayRefElement = elementRef.current;

		if (!visible && elementRef.current) {
			overlayRefElement?.addEventListener("animationend", handleAnimationEnd());
		}

		return () => {
			if (overlayRefElement) {
				overlayRefElement?.removeEventListener(
					"animationend",
					handleAnimationEnd(),
				);
			}
		};
	}, [visible]);

	return {
		shouldRender,
		setShouldRender,
		elementRef,
	};
}
