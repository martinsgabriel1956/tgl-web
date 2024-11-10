import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Loader } from "../../../../components/UI/Loader";
import { SelectGame } from "../../../../components/UI/SelectGame";
import { useGameList } from "./useGameList";

import {
	Arrow,
	GameInfo,
	GameNumber,
	GameType,
	Games,
	GamesPagination,
	LatestGames,
	LatestGamesContainer,
	NewBet,
	NextPage,
	PageNumbers,
	PreviousPage,
	RecentGames,
} from "./styles";

import emptyCart from "../../../../assets/empty_cart.svg";

type ItemTypes = {
	id: number;
	type: string;
	description: string;
	range: number;
	price: number;
	color: string;
	max_number: number;
	min_cart_value: number;
};

export function GameList() {
	const {
		items,
		gameNumbers,
		games,
		cartGameFiltered,
		meta,
		prevPage,
		nextPage,
		buttonActive,
		filterGames,
		isLoading,
	} = useGameList();

	const hasGameNumbers = games.length > 0 && cartGameFiltered.length <= 0;
	const hasGame = items.length >= 0 && games.length >= 0;
	return (
		<>
			<Loader isLoading={isLoading} />
			<RecentGames>
				<div>
					{hasGame && (
						<>
							<h2>Recent Games</h2>
							<span>Filters</span>
						</>
					)}
					<Games>
						{items?.map((item: ItemTypes, index: number) => (
							<SelectGame
								key={index}
								background={
									buttonActive === item.type ? item.color : "transparent"
								}
								border={item.color}
								onClick={() => filterGames(item.type, games)}
								disabled={gameNumbers < []}
								color={buttonActive !== item.type ? item.color : "white"}
							>
								{item.type}
							</SelectGame>
						))}
					</Games>
				</div>
				<NewBet to="/new_bet">
					New Bet
					<Arrow />
				</NewBet>
			</RecentGames>
			<LatestGamesContainer>
				{!hasGame && (
					<LatestGames>
						<img src={emptyCart} alt="empty cart" />
						<span>Faça um novo jogo para aparecer aqui!</span>
					</LatestGames>
				)}
				{hasGameNumbers &&
					games.map((game: any) => (
						<LatestGames key={game.id} color={game.games.color}>
							<GameNumber>{game.numbers}</GameNumber>
							<section>
								<GameInfo>
									{game.date_string} - (R$
									{game.total_price.toFixed(2).replace(".", ",")})
								</GameInfo>
								<GameType color={game.games.color}>{game.games.type}</GameType>
							</section>
						</LatestGames>
					))}
				{cartGameFiltered.length > 0 &&
					cartGameFiltered.map((game: any) => (
						<LatestGames key={game.id} color={game.games.color}>
							<GameNumber>{game.numbers}</GameNumber>
							<section>
								<GameInfo>
									{game.date_string} - (R$
									{game.total_price.toFixed(2).replace(".", ",")})
								</GameInfo>
								<GameType color={game.games.color}>{game.games.type}</GameType>
							</section>
						</LatestGames>
					))}

				{hasGameNumbers && (
					<GamesPagination>
						<PreviousPage
							onClick={prevPage}
							disabled={meta.current_page === meta.last_page}
						>
							<FiArrowLeft />
						</PreviousPage>
						<PageNumbers>
							{meta.current_page} / {meta.last_page}
						</PageNumbers>
						<NextPage
							onClick={nextPage}
							disabled={meta.current_page === meta.last_page}
						>
							<FiArrowRight />
						</NextPage>
					</GamesPagination>
				)}
			</LatestGamesContainer>
		</>
	);
}
