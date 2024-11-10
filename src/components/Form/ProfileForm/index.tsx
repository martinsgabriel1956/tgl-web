// biome-ignore lint/style/useImportType: <explanation>
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import { api } from "../../../lib/api";
import { Container, Control, SaveInfoButton } from "./styles";

export function ProfileForm() {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	function handleChangeUserInfo(e: FormEvent) {
		e.preventDefault();

		const name = nameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		const isEmptyField = name || email || password;

		if (!isEmptyField) {
			toast.error("Fill at least one field below");
			return;
		}

		api
			.put(
				"/users",
				{
					name,
					password,
					email,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				},
			)
			.then((res) => toast.success("Your Account has been updated"));

		nameRef.current!.value = "";
		emailRef.current!.value = "";
		passwordRef.current!.value = "";
	}

	return (
		<Container onSubmit={handleChangeUserInfo}>
			<Control>
				<input type="text" placeholder="name" ref={nameRef} />
			</Control>
			<Control>
				<input type="email" placeholder="email" ref={emailRef} />
			</Control>
			<Control>
				<input
					type="current-password"
					placeholder="new password"
					ref={passwordRef}
				/>
			</Control>
			<SaveInfoButton>Save</SaveInfoButton>
		</Container>
	);
}
