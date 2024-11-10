import type { AxiosRequestConfig } from "axios";
import { httpClient } from "../httpClient";

export async function getGames(params: AxiosRequestConfig) {
	const { data } = await (await httpClient()).get("/games", params);
	return data;
}
