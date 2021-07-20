import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Footer } from "../../components/UI/Footer";
import { Header } from "../../components/UI/Header";
import { SelectGame } from "../../components/UI/SelectGame";
import { NumbersGame } from "../../components/UI/NumbersGame";
import { Cart } from "../../components/Cart";

import { newBetActions } from "../../store/newbet";

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

type RootState = {
  newBet: {
    items: number[];
    color: string;
  };
};

let cartArr = [];

export function NewBet() {
  let myItems: number[] = useSelector((state: RootState) => state.newBet.items);

  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [description, setDescription] = useState(null);
  const [range, setRange] = useState(0);
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [maxNumber, setMaxNumber] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    api.get("/types").then((res) => setItems(res.data));
  }, []);

  function handleGameSelect(index: number) {
    setDescription(items[index]["description"]);
    setRange(items[index]["range"]);
    setType(items[index]["type"]);
    setMaxNumber(items[index]["maxNumber"]);
    setPrice(items[index]["price"]);
    setColor(items[index]["color"]);
  }

  function clearGame() {
    console.log("Limpo");
    return dispatch(newBetActions.clearGame());
  }

  function completeGame(maxNumber: number, range: number) {
    if(cartArr.length === maxNumber){
        clearGame();
        return dispatch(newBetActions.completeGame({ maxNumber, range }))
    }
    return dispatch(newBetActions.completeGame({ maxNumber, range }))
}

  function handleSelectButton(
    value: number,
    maxNumber: number,
    price: number,
    gameName: string,
    color: string
  ) {
    console.log(value, maxNumber, price, gameName, color);

  }

  function gameButtons() {
    cartArr = [];

    for (let i = 1; i <= range; i++) {
      cartArr.push(
        <NumbersGame
          color={myItems.find(item => item === i)  ? color : "#ADC0C4"}
          onClick={() => handleSelectButton(i, maxNumber, price, type, color)}
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
                  key={index}
                  onClick={() => handleGameSelect(index)}
                  background={type === item.type ? item.color : "transparent"}
                  color={price !== item.price ? item.color : "#fff"}
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
              <ActionButton onClick={() => completeGame(maxNumber, range)}>Complete game</ActionButton>

              <ActionButton onClick={clearGame}>Clear game</ActionButton>
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
