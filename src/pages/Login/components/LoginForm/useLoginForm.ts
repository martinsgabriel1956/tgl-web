// biome-ignore lint/style/useImportType: <explanation>
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../store/auth";

export default function useLoginForm() {
	const dispatch = useDispatch();
	const [pwd, setPwd] = useState("");
	const [isRevealPwd, setIsRevealPwd] = useState(false);

	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const email = emailInputRef.current?.value;
		const password = passwordInputRef.current?.value;

		const isValid = email && password;

		if (!isValid) toast.error("Fill out all the fields");

		dispatch(authActions.login({ email, password }));
	}

	const handleChangePwd = (e: ChangeEvent<HTMLInputElement>) =>
		setPwd(e.target.value);

	const handleChangePasswordVisibility = () => setIsRevealPwd(!isRevealPwd);

	return {
		handleSubmit,
		pwd,
		isRevealPwd,
		emailInputRef,
		passwordInputRef,
		handleChangePwd,
		handleChangePasswordVisibility,
	};
}
