import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
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
  Game,
} from "./styles";

import { cartActions } from "../../../store/cart";
import { gamesActions } from "../../../store/games";

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
  const history = useHistory();

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

  function saveGame(game: {}[]) {
    if(totalPrice < 30) toast.error('O valor mínimo para salvar um jogo é de 30 reais!');

    dispatch(gamesActions.gamesDataFromCart(game));
    dispatch(cartActions.clearCart());

    toast.success('Jogo salvo com sucesso!');
    console.log(game);

    setTimeout(() => {
      history.push('/dashboard');
    }, 2000);
  }

  return (
    <div>
      <Toaster />
      <Container>
        <h2>Cart</h2>

        <GameContainer>
          {cartItem.length > 0 &&
            cartItem.map(({ items, type, price, color, id }) => (
              <Game>
                <DeleteGameContainer color={color}>
                  <DeleteGame onClick={() => deleteGame(id, price)}>
                    <Trash />
                  </DeleteGame>
                </DeleteGameContainer>
                <section>
                  <GameNumbers>{items.join(", ")}</GameNumbers>
                  <div>
                    <GameType color={color}>{type}:</GameType>
                    <GamePrice>
                      R${price.toFixed(2).replace(".", ",")}
                    </GamePrice>
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
          <strong>Cart</strong> Total:{" "}
          {totalPrice > 0 && "R$" + totalPrice.toFixed(2).replace(".", ",")}
        </p>
      </Container>
      <SaveContainer>
        <SaveButton
          disabled={totalPrice < 30}
          onClick={() => saveGame(cartItem)}
        >
          Save
          <Arrow />
        </SaveButton>
      </SaveContainer>
    </div>
  );
}
