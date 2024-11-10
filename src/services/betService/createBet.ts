import { httpClient } from "../httpClient";

type Game = {
	id: string;
	date_string: string;
	color: string;
	game_id: number;
	numbers: string;
	total_price: number;
	type: string;
};

type getBetsProps = {
	body: {
		bets: Game[];
	};
};

export async function createBet({ body }: getBetsProps) {
	const { data } = await (await httpClient()).post(
		"/bets",
		{
			bets: body.bets,
		},
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		},
	);

	return data;
}
