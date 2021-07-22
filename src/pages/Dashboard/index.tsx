import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../../services/api";

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
  GameInfo
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
  "max-number": number;
  "min-cart-value": number;
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
  const [buttonActive, setButtonActive] = useState("");

  useEffect(() => {
    api.get("/types").then((res) => {
      setItems(res.data);
    });
  }, [dispatch]);

  const gameNumbers: {}[] = useSelector(
    (state: RootState) => state.games.cartItem
  );

  function filterGames(gameType: string) {
    setButtonActive(gameType);
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
          {gameNumbers &&
            gameNumbers.map((item: any) =>
              item.game.map((item: any, index: number) => (
                <LatestGames key={index} color={item.color}>
                  <GameNumber>{item.items.join(", ")}</GameNumber>
                  <section>
                    <GameInfo>
                      {item.date} - (R${item.price.toFixed(2).replace(".", ",")})
                    </GameInfo>
                    <GameType color={item.color}>{item.type}</GameType>
                  </section>
                </LatestGames>
              ))
            )}
        </LatestGamesContainer>
      </Container>
      <Footer />
    </>
  );
}
