import { Toaster } from "react-hot-toast";
import { ButtonGreen } from "../../UI/ButtonGreen";
import { useResetPasswordForm } from "./useResetPasswordForm";

import { Arrow, Container, Control } from "./styles";

export function ResetPasswordForm() {
	const { handleRecoverPassword, emailInputRef } = useResetPasswordForm();

	return (
		<>
			<Toaster />
			<Container onSubmit={handleRecoverPassword}>
				<Control>
					<input type="email" placeholder="Email" ref={emailInputRef} />
				</Control>
				<ButtonGreen>
					Register
					<Arrow />
				</ButtonGreen>
			</Container>
		</>
	);
}
