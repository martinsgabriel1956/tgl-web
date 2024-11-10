import { api } from "../lib/api";
import { delay } from "../utils/delay";

export async function httpClient() {
	await delay(1000);
	return api;
}
