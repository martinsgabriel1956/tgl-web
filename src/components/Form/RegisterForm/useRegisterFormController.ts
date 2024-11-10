// biome-ignore lint/style/useImportType: <explanation>
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

export function useRegisterFormController() {
	const dispatch = useDispatch();

	const [pwd, setPwd] = useState("");
	const [isRevealPwd, setIsRevealPwd] = useState(false);

	const nameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const name = nameInputRef.current?.value;
		const email = emailInputRef.current?.value;
		const password = passwordInputRef.current?.value;

		const emptyField = ![name, email, password].every(Boolean);

		if (emptyField) {
			toast.error("Fill out all the fields");
			return;
		}

		dispatch(authActions.register({ name, email, password }));
	}

	function handleChangePwd(event: ChangeEvent<HTMLInputElement>) {
		setPwd(event.target?.value);
	}

	function handleIsRevealPwd() {
		setIsRevealPwd((prev) => !prev);
	}

	return {
		handleSubmit,
		nameInputRef,
		emailInputRef,
		isRevealPwd,
		pwd,
		passwordInputRef,
		handleChangePwd,
		handleIsRevealPwd,
	};
}
