import { Navigate, Route, Routes } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { LoggedLayout } from "../layouts/LoggedLayout";
import {
	Dashboard,
	ErrorPage,
	Login,
	NewBet,
	Profile,
	Recovery,
	Register,
	ResetPassword,
} from "../pages";
import { useAppRoutes } from "./useAppRoutes";

type LoginType = {
	email?: string | null;
	password?: string | null;
};

export function AppRoutes({ email, password }: LoginType) {
	const { isLoggedIn } = useAppRoutes({ email, password });

	return (
		<>
			<Routes>
				{isLoggedIn && (
					<Route element={<LoggedLayout />}>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/new_bet" element={<NewBet />} />
						<Route path="/profile" element={<Profile />} />
					</Route>
				)}

				{!isLoggedIn && (
					<Route element={<AuthLayout />}>
						<Route path="/login" element={<Login />} />
						<Route path="/reset_password" element={<ResetPassword />} />
						<Route path="/register" element={<Register />} />
						<Route path="/recovery" element={<Recovery />} />
					</Route>
				)}

				<Route
					path="/"
					element={
						isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
					}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}
