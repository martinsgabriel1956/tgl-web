import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { RecentGames, Games, NewBet, Arrow, LatestGames } from "./styles";

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



export function Dashboard() {

  const [items, setItems] = useState([]);
  const [buttonActive, setButtonActive] = useState("");

  useEffect(() => {
    api.get("/types").then((res) => {
      setItems(res.data);
    });
  }, []);

  function filterGames(gameType: string) {
    setButtonActive(gameType);
  }

  return (
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}
