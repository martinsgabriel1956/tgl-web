import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../../services/api";

import { gamesActions } from "../../store/games";
import emptyCart from "../../assets/empty_cart.svg";

import {
  Container,
  RecentGames,
  Games,
  NewBet,
  Arrow,
  LatestGames,
  LatestGamesContainer,
  GameNumber,
  GameType,
  GameInfo,
} from "./styles";

import { Header } from "../../components/UI/Header";
import { Footer } from "../../components/UI/Footer";
import { SelectGame } from "../../components/UI/SelectGame";

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

export function Dashboard() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [games, setGames] = useState([]);
  const [buttonActive, setButtonActive] = useState("");

  useEffect(() => {
    api.get("/games").then((res) => {
      setItems(res.data);
    });

    api
      .get("/bets?page=1&listNumber=10", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setGames(res.data.data);
      });
  }, [dispatch]);

  const gameNumbers: {}[] = useSelector(
    (state: RootState) => state.games.cartItem
  );

  const cartGameFiltered: {}[] = useSelector(
    (state: RootState) => state.games.cartItemFiltered
  );

  function filterGames(gameType: string) {
    setButtonActive(gameType);
    dispatch(gamesActions.filterGameCart({ gameType }));
  }

  return (
    <>
      <Header />
      <Container>
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
                    onClick={() => filterGames(item.type)}
                    disabled={gameNumbers <= []}
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
          {gameNumbers <= [] && (
            <LatestGames>
              <img src={emptyCart} alt="empty cart" />
              <span>Faça um novo jogo para aparecer aqui!</span>
            </LatestGames>
          )}
          {games &&
            cartGameFiltered.length <= 0 &&
            games.map(
              (
                { color, numbers, date_string, total_price, type }: any,
                index: number
              ) => {
                <LatestGames key={index} color={color}>
                  <GameNumber>{numbers}</GameNumber>
                  <section>
                    <GameInfo>
                      {date_string} - (R$
                      {total_price.toFixed(2).replace(".", ",")})
                    </GameInfo>
                    <GameType color={color}>{type}</GameType>
                  </section>
                </LatestGames>;
              }
            )}

          {cartGameFiltered.length > 0 &&
            cartGameFiltered.map(({ color, numbers, date_string, total_price, type }: any, index: number) => (
              <LatestGames key={index} color={color}>
                <GameNumber>{numbers}</GameNumber>
                <section>
                  <GameInfo>
                    {date_string} - (R$
                    {total_price.toFixed(2).replace(".", ",")})
                  </GameInfo>
                  <GameType color={color}>
                    {type}
                  </GameType>
                </section>
              </LatestGames>
            ))}
        </LatestGamesContainer>
      </Container>
      <Footer />
    </>
  );
}
