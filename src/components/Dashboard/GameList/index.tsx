import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import {
  RecentGames,
  Games,
  NewBet,
  Arrow,
  LatestGames,
  GameNumber,
  GameType,
  GameInfo,
  GamesPagination,
  PreviousPage,
  NextPage,
  PageNumbers,
  LatestGamesContainer,
} from "./styles";

import { api } from "../../../services/api";

import { gamesActions } from "../../../store/games";

import { SelectGame } from "../../UI/SelectGame";

import emptyCart from "../../../assets/empty_cart.svg";

type ItemTypes = {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  max_number: number;
  min_cart_value: number;
};

type RootState = {
  games: {
    cartItem: {}[];
    cartItemFiltered: {}[];
  };
};

export function GameList() {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [games, setGames] = useState([]);
  const [gamesId, setGamesId] = useState(null);
  const [meta, setMeta] = useState({ current_page: 1, last_page: 1 });
  const [buttonActive, setButtonActive] = useState("");
  const [page, setPage] = useState(1);

  function nextPage() {
    if (meta.current_page !== meta.last_page) setPage((prev) => prev + 1);
  }

  function prevPage() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  useEffect(() => {
    api.get("/games").then((res) => {
      setItems(res.data);
    });

    api
      .get(`/bets?page=${page}&listNumber=5`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMeta(res.data.meta);
        setGames(res.data.data);
      });

    api
      .get(`/filter?page=${page}?id=${gamesId}}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMeta(res.data.meta);
        setGamesId(res.data.data.id);
      });
  }, [page, gamesId]);

  const gameNumbers: {}[] = useSelector(
    (state: RootState) => state.games.cartItem
  );

  const cartGameFiltered: {}[] = useSelector(
    (state: RootState) => state.games.cartItemFiltered
  );

  function filterGames(gameType: string, games: {}[]) {
    setButtonActive(gameType);
    dispatch(gamesActions.filterGameCart({ gameType, games }));
  }
  return (
    <>
      <RecentGames>
        <div>
          <h2>Recent Games</h2>
          <span>Filters</span>
          <Games>
            {items &&
              items.map((item: ItemTypes, index: number) => (
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
        {gameNumbers === [] && (
          <LatestGames>
            <img src={emptyCart} alt="empty cart" />
            <span>Faça um novo jogo para aparecer aqui!</span>
          </LatestGames>
        )}
        {games &&
          cartGameFiltered.length <= 0 &&
          games.map((game: any, index: number) => (
            <LatestGames key={index} color={game.games.color}>
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
          cartGameFiltered.map((game: any, index: number) => (
            <LatestGames key={index} color={game.games.color}>
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

        {games &&
          cartGameFiltered.length <= 0 && (
          <GamesPagination>
            <PreviousPage onClick={() => prevPage()}>
              <FiArrowLeft />
            </PreviousPage>
            <PageNumbers>
              {meta.current_page} / {meta.last_page}
            </PageNumbers>
            <NextPage onClick={() => nextPage()}>
              <FiArrowRight />
            </NextPage>
          </GamesPagination>
        )}
      </LatestGamesContainer>
    </>
  );
}
