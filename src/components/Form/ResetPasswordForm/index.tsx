import { FormEvent, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { authActions } from "../../../store/auth";

import { Container, Control, Arrow } from "./styles";

import { ButtonGreen } from "../../UI/ButtonGreen";

export function ResetPasswordForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const emailInputRef = useRef<HTMLInputElement>(null);

  function handleRecoverPassword(e: FormEvent) {
    e.preventDefault();

    const email = emailInputRef.current?.value;

    if (!email) {
      toast.error("Entre com um email válido");
    }

    dispatch(authActions.validateEmail({ email }));

    history.push(`/login`);
  }

  return (
    <>
      <Toaster />
      <Container onSubmit={handleRecoverPassword}>
        <Control>
          <input type="email" placeholder="Email" ref={emailInputRef} />
        </Control>
        <ButtonGreen>
          Register
          <Arrow />
        </ButtonGreen>
      </Container>
    </>
  );
}
