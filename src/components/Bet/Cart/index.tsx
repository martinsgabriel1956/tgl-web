import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";

import {
  Container,
  SaveContainer,
  SaveButton,
  Arrow,
  DeleteGameContainer,
  DeleteGame,
  GameContainer,
  EmptyCart,
  Trash,
  GameNumbers,
  GameType,
  GamePrice,
  Game
} from "./styles";

import { cartActions } from "../../../store/cart";

type RootState = {
  cart: {
    cartItem: {
      id: string;
      items: number[];
      price: number;
      type: string;
      color: string;
    }[];
    totalPrice: number;
  };
};

export function Cart() {
  const dispatch = useDispatch();

  let cartItem: {
    id: string;
    items: number[];
    price: number;
    type: string;
    color: string;
  }[] = useSelector((state: RootState) => state.cart.cartItem);

  let totalPrice: number = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  function deleteGame(id: string, price: number) {
    dispatch(cartActions.deleteGame({ id, price }));
  }

  return (
    <div>
      <Toaster />
      <Container>
        <h2>Cart</h2>
  
          <GameContainer >
            {cartItem.length > 0 &&
              cartItem.map(({ items, type, price, color, id }) => (
                <Game>
                  <DeleteGameContainer color={color}>
                    <DeleteGame onClick={() => deleteGame(id, price)} >
                      <Trash />
                    </DeleteGame>
                  </DeleteGameContainer>
                  <section>
                    <GameNumbers>{items.join(", ")}</GameNumbers>
                    <div>
                      <GameType color={color}>{type}:</GameType>
                      <GamePrice>R${price.toFixed(2).replace(".", ",")}</GamePrice>
                    </div>
                  </section>
                </Game>
              ))}
  
            {cartItem.length < 1 && (
              <EmptyCart>
                <FiShoppingCart />
                Carrinho vázio
              </EmptyCart>
            )}
          </GameContainer>

        <p>
          <strong>Cart</strong> Total: {totalPrice > 0 && "R$" + totalPrice.toFixed(2).replace(".", ",")}
        </p>
      </Container>
      <SaveContainer>
        <SaveButton>
          Save
          <Arrow />
        </SaveButton>
      </SaveContainer>
    </div>
  );
}
