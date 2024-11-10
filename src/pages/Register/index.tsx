import { FiArrowLeft } from "react-icons/fi";

import { RegisterForm } from "../../components/Form/RegisterForm";
import { ButtonGray } from "../../components/UI/ButtonGray";
import { Card } from "../../components/UI/Card";

export function Register() {
	return (
		<section>
			<h2>Registration</h2>
			<Card>
				<RegisterForm />
			</Card>
			<ButtonGray to="/login">
				<FiArrowLeft />
				Back
			</ButtonGray>
		</section>
	);
}
