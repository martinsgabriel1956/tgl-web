import { FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { authActions } from "../../../store/auth";

import {
  Container,
  Control,
  Arrow,
  ShowPasswordContainer,
  EyeIcon,
  EyeIconOff,
} from "./styles";

import { ButtonGreen } from "../../UI/ButtonGreen";

type RootState = {
  auth: {
    isLoggedIn: string | null;
  };
};

export function LoginForm() {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    const isValid = email && password;

    if (!isValid) toast.error("Preencha todos os campos!");

    dispatch(authActions.login({ email, password }));

    if(isLoggedIn) {
      history.push("/");
    }
  }

  return (
    <>
      <Toaster />
      <Container onSubmit={handleSubmit}>
        <Control>
          <input type="text" placeholder="Email" ref={emailInputRef} />
        </Control>
        <Control>
          <ShowPasswordContainer>
            <input
              type={isRevealPwd ? "text" : "current-password"}
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
