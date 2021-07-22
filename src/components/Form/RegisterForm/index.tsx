import { ReactNode, useRef, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { ButtonGreen } from "../../UI/ButtonGreen";

import { authActions } from "../../../store/auth";

import { Container, Control, Arrow } from "./styles";

interface RegisterFormProps {
  children?: ReactNode;
}

export function RegisterForm(props: RegisterFormProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    dispatch(authActions.register({ name, email, password }));

    if (!name || !email || !password) {
      toast.error("Preencha todos os campos");
      return;
    }
    
    history.push("/login");
  }

  return (
    <>
      <Toaster />
      <Container onSubmit={handleSubmit}>
        <Control>
          <input type="text" placeholder="Nome" ref={nameInputRef} />
        </Control>
        <Control>
          <input type="email" placeholder="Email" ref={emailInputRef} />
        </Control>
        <Control>
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </Control>
        <ButtonGreen>
          Register
          <Arrow />
        </ButtonGreen>
      </Container>
    </>
  );
}
