import { Outlet } from "react-router-dom";
import { Footer } from "../components/UI/Footer";
import { Header } from "../components/UI/Header";

export function LoggedLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
