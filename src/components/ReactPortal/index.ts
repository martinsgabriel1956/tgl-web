import reactDom from "react-dom";

type ReactPortalProps = {
	children: JSX.Element;
	containerId: string;
};

export function ReactPortal({
	children,
	containerId = "portal-root",
}: ReactPortalProps) {
	let container = document.getElementById(containerId);

	if (!container) {
		container = document.createElement("div");
		container.setAttribute("id", containerId);
		document.body.appendChild(container);
	}

	return reactDom.createPortal(children, container);
}
