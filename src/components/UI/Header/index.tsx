import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authActions } from "../../../store/auth";
import { Container, Logo, NavContainer, LogoutButton, Arrow } from "./styles";

export function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.push(`/login`);
  };

  return (
    <Container>
      <Logo>
        <h1>TGL</h1>
      </Logo>
      <NavContainer>
        <NavLink to="#">Account</NavLink>
        <LogoutButton onClick={logoutHandler}>
          Logout
          <Arrow />
        </LogoutButton>
      </NavContainer>
    </Container>
  );
}
