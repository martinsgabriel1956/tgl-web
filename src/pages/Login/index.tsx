import { ButtonGray } from "../../components/UI/ButtonGray";
import { Card } from "../../components/UI/Card";
import { LoginForm } from "./components/LoginForm";

import { Arrow } from "./styles";

export function Login() {
	return (
		<section>
			<h2>Authentication</h2>
			<Card>
				<LoginForm />
			</Card>
			<ButtonGray to="/register">
				Sign Up
				<Arrow />
			</ButtonGray>
		</section>
	);
}
