import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

import {
  Container,
  SaveContainer,
  SaveButton,
  Arrow,
  DeleteGameContainer,
  DeleteGame,
  GameName,
  GameContainer,
  EmptyCart
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

  return (
    <div>
      <Toaster />
      <Container>
        <h2>Cart</h2>

        <GameContainer>
          {cartItem.length > 1 &&
            cartItem.map((item) => (
              <>
                <DeleteGameContainer>
                  <DeleteGame>
                    <FiTrash2 />
                  </DeleteGame>
                  <FiTrash2 />
                </DeleteGameContainer>
                <section>
                  <span>{item.items.join(", ")}</span>
                  <div>
                    <GameName>{item.type}</GameName>
                    <span>R${item.price.toFixed(2).replace(".", ",")}</span>
                  </div>
                </section>
              </>
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
          {totalPrice > 1 && "R$" + totalPrice.toFixed(2).replace(".", ",")}
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
