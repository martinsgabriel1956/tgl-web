import { FormEvent, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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

export function RecoveryForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);

  const tokenRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  function handleRecoveryPassword(e: FormEvent) {
    e.preventDefault();

    const token = tokenRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    dispatch(
      authActions.recoveryPassword({ token, password, confirmPassword })
    );

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
          <ShowPasswordContainer>
            <input
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Password"
              ref={passwordRef}
            />

            {!isRevealPwd && <EyeIconOff />}
            <EyeIcon
              title={isRevealPwd ? "Hide password" : "Show password"}
              onClick={() => setIsRevealPwd(!isRevealPwd)}
            />
          </ShowPasswordContainer>
        </Control>
        <Control>
          <ShowPasswordContainer>
            <input
              type={isRevealConfirmPwd ? "text" : "password"}
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
            />

            {!isRevealConfirmPwd && <EyeIconOff />}
            <EyeIcon
              title={isRevealConfirmPwd ? "Hide password" : "Show password"}
              onClick={() => setIsRevealConfirmPwd(!isRevealConfirmPwd)}
            />
          </ShowPasswordContainer>
        </Control>
        <ButtonGreen>
          Recovery
          <Arrow />
        </ButtonGreen>
      </Container>
    </>
  );
}
