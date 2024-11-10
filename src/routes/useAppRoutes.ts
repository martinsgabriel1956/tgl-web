import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

type RootState = {
	auth: {
		isLoggedIn: string | null;
	};
};

type UseAppRoutesProps = {
	email?: string | null;
	password?: string | null;
};

export function useAppRoutes({ email, password }: UseAppRoutesProps) {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

	email = localStorage.getItem("email");
	password = localStorage.getItem("password");

	const userVerified = email && password;

	const autoLogin = useCallback(() => {
		if (userVerified) dispatch(authActions.login({ email, password }));
	}, [dispatch, email, password, userVerified]);

	useEffect(() => {
		autoLogin();
	}, [autoLogin]);

	return {
		isLoggedIn,
	};
}
