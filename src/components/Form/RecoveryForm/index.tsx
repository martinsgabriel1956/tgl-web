import { FormEvent, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

import { Container, Control, Arrow } from "./styles";

import { ButtonGreen } from "../../UI/ButtonGreen";

export function RecoveryForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const tokenRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  function handleRecoveryPassword(e: FormEvent) {
    e.preventDefault();

    const token = tokenRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    dispatch(authActions.recoveryPassword({token, password, confirmPassword}))

    const isEmpty = !token || !password || !confirmPassword;

    if (isEmpty) toast.error("Fill the empty fields!");

    setTimeout(() => {
      history.push("/login");
    }, 2000);
  }


  return (
    <>
      <Toaster />
      <Container onSubmit={handleRecoveryPassword}>
        <Control>
          <input type="text" placeholder="Token" ref={tokenRef} />
        </Control>
        <Control>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </Control>
        <Control>
          <input
            type="password"
            placeholder="Password Confirm"
            ref={confirmPasswordRef}
          />
        </Control>
        <ButtonGreen>
          Recovery
          <Arrow />
        </ButtonGreen>
      </Container>
    </>
  );
}
