import { httpClient } from "../httpClient";

type getBetsProps = {
	page: number;
};

export async function getBets({ page }: getBetsProps) {
	const { data } = await (await httpClient()).get(
		`/bets?page=${page}&listNumber=5`,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		},
	);

	return data;
}
