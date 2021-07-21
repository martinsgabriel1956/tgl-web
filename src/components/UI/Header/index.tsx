import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authActions } from "../../../store/auth";
import { Container, Logo, NavContainer, LogoutButton, Arrow, LogoContainer } from "./styles";

export function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.push(`/login`);
  };

  return (
    <Container>
      <LogoContainer>
        <Logo>
          <h1>TGL</h1>
        </Logo>
        {
          location.pathname === "/new_bet" && (
            <NavLink to="/dashboard">Home</NavLink>
          )
        }
      </LogoContainer>
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
