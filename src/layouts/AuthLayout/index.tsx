import { Outlet } from "react-router-dom";
import { Footer } from "../../components/UI/Footer";
import { Logo } from "../../components/UI/Logo";
import { Container } from "./styles";

export function AuthLayout() {
	return (
		<>
			<Container>
				<Logo />
				<Outlet />
			</Container>
			<Footer />
		</>
	);
}
