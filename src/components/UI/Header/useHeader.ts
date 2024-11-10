import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authActions } from "../../../store/auth";

export function useHeader() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const logoutHandler = () => {
		toast.success("Thanks for bet with us!!! See you latter");
		setTimeout(() => {
			dispatch(authActions.logout());
			navigate("/login");
		}, 3000);
	};

	return {
		logoutHandler,
		location,
	};
}
