import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export function useProfile() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isEditable, setIsEditable] = useState(false);

	function editUser() {
		setIsEditable((prev) => !prev);
	}

	useEffect(() => {
		api
			.get("/user", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			.then((res) => {
				setName(res.data.name);
				setEmail(res.data.email);
			});
	}, []);

	return {
		name,
		email,
		isEditable,
		editUser,
	};
}
