// biome-ignore lint/style/useImportType: <explanation>
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

export function useResetPasswordForm() {
	const dispatch = useDispatch();

	const emailInputRef = useRef<HTMLInputElement>(null);

	function handleRecoverPassword(event: FormEvent) {
		event.preventDefault();

		const email = emailInputRef.current?.value;

		if (!email) {
			toast.error("Enter with a valid email!!");
			return;
		}

		dispatch(authActions.validateEmail({ email }));
	}

	return {
		handleRecoverPassword,
		emailInputRef,
	};
}
