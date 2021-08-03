import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
      game_id:number;
      id: string;
      numbers: number[] | string;
      total_price: number;
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
    game_id: number;
    id: string;
    numbers: number[] | string;
    total_price: number;
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

    const stillNotReachATotalPrice = 30 - totalPrice;

    if (totalPrice < 30) {
      toast.error(`Faltam R$ ${stillNotReachATotalPrice.toFixed(2).replace('.', ',')} para o valor minimo`);
      return;
    }

    dispatch(gamesActions.gamesDataFromCart({ game }));
    dispatch(cartActions.clearCart());

    toast.success("Jogo salvo com sucesso!");
    
    setTimeout(() => {
      history.push("/dashboard");
    }, 2000);
  }

  function handleSaveGame(e: FormEvent) {
    e.preventDefault();
    saveGame(cartItem);
  }

  return (
    <div>
      <Toaster />
      <Container onSubmit={handleSaveGame}>
        <h2>Cart</h2>

        <GameContainer>
          {cartItem.length > 0 &&
            cartItem.map(({ game_id, id, numbers, type, total_price, color }) => (
              <Game key={id}>
                <DeleteGameContainer color={color}>
                  <DeleteGame onClick={() => deleteGame(id, total_price)}>
                    <Trash />
                  </DeleteGame>
                </DeleteGameContainer>
                <section>
                  <GameNumbers>{numbers}</GameNumbers>
                  <div>
                    <GameType color={color}>{type}:</GameType>
                    <GamePrice>
                      R${total_price.toFixed(2).replace(".", ",")}
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
          {totalPrice >= 0 && `R$ ${totalPrice.toFixed(2).replace(".", ",")}`}
        </p>
      </Container>
      <SaveContainer>
        <SaveButton
          onClick={() => saveGame(cartItem)}
        >
          Save
          <Arrow />
        </SaveButton>
      </SaveContainer>
    </div>
  );
}
