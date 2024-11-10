import { FiArrowLeft } from "react-icons/fi";
import { ResetPasswordForm } from "../../components/Form/ResetPasswordForm";
import { ButtonGray } from "../../components/UI/ButtonGray";
import { Card } from "../../components/UI/Card";

export function ResetPassword() {
	return (
		<section>
			<h2>Reset Password</h2>
			<Card>
				<ResetPasswordForm />
			</Card>
			<ButtonGray to="/login">
				<FiArrowLeft />
				Back
			</ButtonGray>
		</section>
	);
}
