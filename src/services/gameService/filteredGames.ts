import type { AxiosRequestConfig } from "axios";
import { httpClient } from "../httpClient";

type filteredGamesParams = {
	page: number;
	gamesId?: string;
	params?: AxiosRequestConfig;
};

export async function filteredGames({
	gamesId,
	page,
	params,
}: filteredGamesParams) {
	const { data } = await (await httpClient()).get(
		`/filter?page=${page}?id=${gamesId}}`,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			params,
		},
	);
	return data;
}
