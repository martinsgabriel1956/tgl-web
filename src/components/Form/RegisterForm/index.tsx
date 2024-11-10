import { Toaster } from "react-hot-toast";
import { useRegisterFormController } from "./useRegisterFormController";

import { ButtonGreen } from "../../UI/ButtonGreen";

import {
  Container,
  Control,
  Arrow,
  ShowPasswordContainer,
  EyeIcon,
  EyeIconOff,
} from "./styles";

export function RegisterForm() {
  const {
    handleSubmit,
    nameInputRef,
    emailInputRef,
    isRevealPwd,
    pwd,
    passwordInputRef,
    handleChangePwd,
    handleIsRevealPwd
  } = useRegisterFormController();

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
              onChange={handleChangePwd}
              placeholder="Password"
              ref={passwordInputRef}
            />

            {!isRevealPwd && <EyeIconOff />}
            <EyeIcon
              title={isRevealPwd ? "Hide password" : "Show password"}
              onClick={handleIsRevealPwd}
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
