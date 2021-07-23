import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../../services/api";

import { gamesActions } from "../../store/games";
import emptyCart from '../../assets/empty_cart.svg';

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
              <img src={emptyCart} alt='empty cart' />
              <span>Faça um novo jogo para aparecer aqui!</span>
            </LatestGames>
          )} 
          {gameNumbers &&
            cartGameFiltered.length <= 0 &&
            gameNumbers.map((item: any) =>
              item.game.map((item: any, index: number) => (
                <LatestGames key={index} color={item.color}>
                  <GameNumber>{item.items.join(", ")}</GameNumber>
                  <section>
                    <GameInfo>
                      {item.date} - (R${item.price.toFixed(2).replace(".", ",")}
                      )
                    </GameInfo>
                    <GameType color={item.color}>{item.type}</GameType>
                  </section>
                </LatestGames>
              ))
            )}

          {cartGameFiltered.length > 0 &&
            cartGameFiltered.map((item: any) =>
              item.map((itemFiltered: any, index: number) => (
                <LatestGames key={index} color={itemFiltered.color}>
                  <GameNumber>{itemFiltered.items.join(", ")}</GameNumber>
                  <section>
                    <GameInfo>
                      {itemFiltered.date} - (R$
                      {itemFiltered.price.toFixed(2).replace(".", ",")})
                    </GameInfo>
                    <GameType color={itemFiltered.color}>
                      {itemFiltered.type}
                    </GameType>
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
