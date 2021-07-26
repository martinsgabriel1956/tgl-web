import { FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { authActions } from "../../../store/auth";

import { Container, Control, Arrow } from "./styles";

import { ButtonGreen } from "../../UI/ButtonGreen";

type RootState = {
  auth: {
    isLoggedIn: boolean;
  };
};

export function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    dispatch(authActions.login({ email, password }));
    
    if (!isLoggedIn) return;

    history.push("/dashboard");
  }

  return (
    <>
      <Toaster />
      <Container onSubmit={handleSubmit}>
        <Control>
          <input type="text" placeholder="Email" ref={emailInputRef} />
        </Control>
        <Control>
          <input type="text" placeholder="Password" ref={passwordInputRef} />
        </Control>
        <div>
          <Link to={"/reset_password"}>I forget my password</Link>
        </div>
        <ButtonGreen>
          Log In
          <Arrow />
        </ButtonGreen>
      </Container>
    </>
  );
}
