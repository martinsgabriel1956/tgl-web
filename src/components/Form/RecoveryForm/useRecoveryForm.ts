// biome-ignore lint/style/useImportType: <explanation>
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

export function useRecoveryForm() {
	const dispatch = useDispatch();

	const [pwd, setPwd] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");
	const [isRevealPwd, setIsRevealPwd] = useState(false);
	const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);

	const tokenRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);

	function handleRecoveryPassword(event: FormEvent) {
		event.preventDefault();

		const token = tokenRef.current?.value;
		const password = passwordRef.current?.value;
		const confirmPassword = confirmPasswordRef.current?.value;

		const isEmpty = !token || !password || !confirmPassword;

		if (isEmpty) {
			toast.error("Fill out all the fields!");
			return;
		}

		dispatch(
			authActions.recoveryPassword({ token, password, confirmPassword }),
		);
	}

	function handleChangePwd(event: ChangeEvent<HTMLInputElement>) {
		return setPwd(event.target.value);
	}

	function handleChangeConfirmPwd(event: ChangeEvent<HTMLInputElement>) {
		return setConfirmPwd(event.target.value);
	}

	function handleIsRevealPwd() {
		setIsRevealPwd((prev) => !prev);
	}
	function handleIsRevealConfirmPwd() {
		setIsRevealConfirmPwd((prev) => !prev);
	}

	return {
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
	};
}
