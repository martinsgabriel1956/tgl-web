import { useState, useEffect, useRef } from "react";

import { Footer } from "../../components/UI/Footer";
import { Header } from "../../components/UI/Header";
import { SelectGame } from "../../components/UI/SelectGame";
import { NumbersGame } from "../../components/UI/NumbersGame";
import { Cart } from "../../components/Cart";

import { api } from "../../services/api";

import {
  Container,
  Games,
  ButtonContainer,
  ActionButton,
  AddToCartButton,
  CartImg,
  GameNumbers,
} from "./styles";

type ItemTypes = {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  "max-number": number;
  "min-cart-value": number;
};

let cartArr = [];

export function NewBet() {
  const numberButtonsRef = useRef<HTMLButtonElement>(null);

  const [items, setItems] = useState([]);
  const [description, setDescription] = useState(null);
  const [range, setRange] = useState(0);
  const [type, setType] = useState(null);

  useEffect(() => {
    api.get("/types").then((res) => setItems(res.data));
  }, []);

  function handleGameSelect(index: number) {
    setDescription(items[index]["description"]);
    setRange(items[index]["range"]);
    setType(items[index]["type"]);
  }

  function gameButtons() {
    cartArr = [];

    for (let i = 1; i <= range; i++) {
      cartArr.push(
        <NumbersGame
          ref={numberButtonsRef}
          key={i}
          value={i}
        >
          {i < 10 ? `0${i}` : i}
        </NumbersGame>
      );
    }
    return cartArr;
  }

  return (
    <>
      <Header />
      <Container>
        <section>
          <h2>
            New Bet <span>For {type}</span>
          </h2>

          <p>Choose a game</p>

          <Games>
            {items &&
              items.map((item: ItemTypes, index: number) => (
                <SelectGame
                  onClick={() => handleGameSelect(index)}
                  key={index}
                  color={item.color}
                >
                  {item.type}
                </SelectGame>
              ))}
          </Games>
          <p>Fill Your Bet</p>

          <span>{items && description}</span>

          <GameNumbers>{items && gameButtons()}</GameNumbers>

          <ButtonContainer>
            <div>
              <ActionButton>Complete game</ActionButton>

              <ActionButton>Clear game</ActionButton>
            </div>

            <div>
              <AddToCartButton>
                <CartImg />
                Add to cart
              </AddToCartButton>
            </div>
          </ButtonContainer>
        </section>
        <section>
          <Cart />
        </section>
      </Container>
      <Footer />
    </>
  );
}
