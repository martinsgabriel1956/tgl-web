import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import useLoginForm from "./useLoginForm";

import {
	Arrow,
	Container,
	Control,
	EyeIcon,
	EyeIconOff,
	ShowPasswordContainer,
} from "./styles";

import { ButtonGreen } from "../../../../components/UI/ButtonGreen";

export function LoginForm() {
	const {
		handleSubmit,
		isRevealPwd,
		pwd,
		emailInputRef,
		passwordInputRef,
		handleChangePwd,
		handleChangePasswordVisibility,
	} = useLoginForm();

	return (
		<>
			<Toaster />
			<Container onSubmit={handleSubmit}>
				<Control>
					<input type="text" placeholder="Email" ref={emailInputRef} />
				</Control>
				<Control>
					<ShowPasswordContainer>
						<input
							type={isRevealPwd ? "text" : "password"}
							value={pwd}
							onChange={handleChangePwd}
							placeholder="Password"
							ref={passwordInputRef}
						/>

						{!isRevealPwd && <EyeIconOff />}
						<EyeIcon
							title={isRevealPwd ? "Hide password" : "Show password"}
							onClick={handleChangePasswordVisibility}
						/>
					</ShowPasswordContainer>
				</Control>
				<div>
					<Link to={"/reset_password"}>I forget my password</Link>
				</div>
				<ButtonGreen>
					Log In
					<Arrow />
				</ButtonGreen>
			</Container>
		</>
	);
}
