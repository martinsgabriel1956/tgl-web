import type { FormEvent } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../../store/cart";
import { gamesActions } from "../../../../store/games";

type Cart = {
	game_id: number;
	id: string;
	numbers: number[] | string;
	total_price: number;
	type: string;
	color: string;
};

type RootState = {
	cart: {
		cartItem: Cart[];
		totalPrice: number;
	};
};

export function useCart() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cartItem: Cart[] = useSelector(
		(state: RootState) => state.cart.cartItem,
	);

	const totalPrice: number = useSelector(
		(state: RootState) => state.cart.totalPrice,
	);

	function deleteGame(id: string, price: number) {
		dispatch(cartActions.deleteGame({ id, price }));
	}

	function saveGame(game: Cart[]) {
		const minimumPrice = 30;
		const stillNotReachATotalPrice = minimumPrice - totalPrice;
		const lessThanMinimumPrice = totalPrice < 30;

		if (lessThanMinimumPrice) {
			toast.error(
				`Faltam R$ ${stillNotReachATotalPrice
					.toFixed(2)
					.replace(".", ",")} para o valor minimo`,
			);
			return;
		}

		dispatch(gamesActions.gamesDataFromCart({ game }));
		dispatch(cartActions.clearCart());

		toast.success("Game Saved Successfully!");

		setTimeout(() => {
			navigate("/dashboard");
		}, 2000);
	}
	function handleSaveGame(event: FormEvent) {
		event.preventDefault();
		saveGame(cartItem);
	}

	return {
		handleSaveGame,
		cartItem,
		deleteGame,
		totalPrice,
		saveGame,
	};
}
