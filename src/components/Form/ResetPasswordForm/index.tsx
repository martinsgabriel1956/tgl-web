import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { authActions } from "../../../store/auth";

import { Container, Control, Arrow } from "./styles";

import { ButtonGreen } from "../../UI/ButtonGreen";

export function ResetPasswordForm() {
  const dispatch = useDispatch();

  const emailInputRef = useRef<HTMLInputElement>(null);

  function handleRecoverPassword(e: FormEvent) {
    e.preventDefault();

    const email = emailInputRef.current?.value;

    if (!email) {
      toast.error("Enter with a valid email!!");
      return;
    } else {
      dispatch(authActions.validateEmail({ email }));
    }
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
