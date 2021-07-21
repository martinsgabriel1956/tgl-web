import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SelectGame } from "../../UI/SelectGame";
import { NumbersGame } from "../../UI/NumbersGame";

import { newBetActions } from "../../../store/newbet";
import { api } from "../../../services/api";

import {
  Container,
  Games,
  GameNumbers,
  ButtonContainer,
  ActionButton,
  AddToCartButton,
  CartImg,
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

let cartArr: any[] = [];

export function GameContent() {
  let nums: number[] = useSelector((state: RootState) => state.newBet.items);

  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [type, setType] = useState("");
  const [description, setDescription] = useState(null);
  const [range, setRange] = useState(0);
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [maxNumber, setMaxNumber] = useState(0);
  const [minCartNumber, setMinCartNumber] = useState(0);

  useEffect(() => {
    api.get("/types")
      .then((res) => setItems(res.data));
  }, [dispatch]);

  function clearGame() {
    return dispatch(newBetActions.clearGame());
  }

  function completeGame(maxNumber: number, range: number) {
    if (nums.length === maxNumber) {
      clearGame();
      return dispatch(newBetActions.completeGame({ maxNumber, range }));
    }
    return dispatch(newBetActions.completeGame({ maxNumber, range }));
  }

  function handleGameSelect(index: number) {
    clearGame();

    setDescription(items[index]["description"]);
    setRange(items[index]["range"]);
    setType(items[index]["type"]);
    setMaxNumber(items[index]["max-number"]);
    setMinCartNumber(items[index]["min-cart-value"]);
    setPrice(items[index]["price"]);
    setColor(items[index]["color"]);
  }

  function handleSelectButton(
    value: number,
    maxNumber: number,
    price: number,
    gameName: string,
    color: string
  ) {
    
    dispatch(
      newBetActions.addToCart({ value, maxNumber, price, gameName })
    );
  }
  
  function gameButtons() {
    cartArr = [];
    
    for (let i = 1; i <= range; i++) {
      cartArr.push(
        <NumbersGame
        color={nums.find((item) => item === i) ? color : "#ADC0C4"}
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
  useEffect(() => {
    if(items.length) handleGameSelect(0)
  }, []);

  return (
    <Container>
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
          <ActionButton onClick={() => completeGame(maxNumber, range)}>
            Complete game
          </ActionButton>
          <ActionButton onClick={clearGame}>Clear game</ActionButton>
        </div>

        <div>
          <AddToCartButton>
            <CartImg />
            Add to cart
          </AddToCartButton>
        </div>
      </ButtonContainer>
    </Container>
  );
}
