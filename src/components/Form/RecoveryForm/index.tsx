import { Toaster } from "react-hot-toast";
import { ButtonGreen } from "../../UI/ButtonGreen";
import { useRecoveryForm } from "./useRecoveryForm";

import {
	Arrow,
	Container,
	Control,
	EyeIcon,
	EyeIconOff,
	ShowPasswordContainer,
} from "./styles";

export function RecoveryForm() {
	const {
		pwd,
		confirmPwd,
		isRevealPwd,
		isRevealConfirmPwd,
		handleRecoveryPassword,
		tokenRef,
		passwordRef,
		confirmPasswordRef,
		handleChangePwd,
		handleIsRevealPwd,
		handleChangeConfirmPwd,
		handleIsRevealConfirmPwd,
	} = useRecoveryForm();

	return (
		<>
			<Toaster />
			<Container onSubmit={handleRecoveryPassword}>
				<Control>
					<input type="text" placeholder="Token" ref={tokenRef} />
				</Control>
				<Control>
					<ShowPasswordContainer>
						<input
							type={isRevealPwd ? "text" : "password"}
							value={pwd}
							onChange={handleChangePwd}
							placeholder="Password"
							ref={passwordRef}
						/>

						{!isRevealPwd && <EyeIconOff />}
						<EyeIcon
							title={isRevealPwd ? "Hide password" : "Show password"}
							onClick={handleIsRevealPwd}
						/>
					</ShowPasswordContainer>
				</Control>
				<Control>
					<ShowPasswordContainer>
						<input
							type={isRevealConfirmPwd ? "text" : "password"}
							value={confirmPwd}
							onChange={handleChangeConfirmPwd}
							placeholder="Confirm Password"
							ref={confirmPasswordRef}
						/>

						{!isRevealConfirmPwd && <EyeIconOff />}
						<EyeIcon
							title={isRevealConfirmPwd ? "Hide password" : "Show password"}
							onClick={handleIsRevealConfirmPwd}
						/>
					</ShowPasswordContainer>
				</Control>
				<ButtonGreen>
					Recovery
					<Arrow />
				</ButtonGreen>
			</Container>
		</>
	);
}
