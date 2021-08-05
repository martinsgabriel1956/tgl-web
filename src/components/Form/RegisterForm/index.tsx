import { ReactNode, useRef, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { ButtonGreen } from "../../UI/ButtonGreen";

import { authActions } from "../../../store/auth";

import {
  Container,
  Control,
  Arrow,
  ShowPasswordContainer,
  EyeIcon,
  EyeIconOff,
} from "./styles";

interface RegisterFormProps {
  children?: ReactNode;
}

export function RegisterForm(props: RegisterFormProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    dispatch(authActions.register({ name, email, password }));

    const emptyField = !name || !email || !password;

    if (emptyField) {
      toast.error("Preencha todos os campos");
      return;
    }

    setTimeout(() => {
      history.push("/login");
    }, 2000);
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
          <ShowPasswordContainer>
            <input
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Password"
              ref={passwordInputRef}
            />

            {!isRevealPwd && <EyeIconOff />}
            <EyeIcon
              title={isRevealPwd ? "Hide password" : "Show password"}
              onClick={() => setIsRevealPwd(!isRevealPwd)}
            />
          </ShowPasswordContainer>
        </Control>
        <ButtonGreen>
          Register
          <Arrow />
        </ButtonGreen>
      </Container>
    </>
  );
}
