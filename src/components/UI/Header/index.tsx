import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authActions } from "../../../store/auth";
import {
  Container,
  Logo,
  NavContainer,
  LogoutButton,
  Arrow,
  LogoContainer,
  NewBet
} from "./styles";
import toast, { Toaster } from "react-hot-toast";

export function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logoutHandler = () => {
    toast.success("Thanks for bet with us!!! See you latter");
    setTimeout(() => {
      dispatch(authActions.logout());
      history.push(`/login`);
    }, 3000);
  };

  return (
    <>
      <Toaster />
      <Container>
        <LogoContainer>
          <Logo>
            <h1>TGL</h1>
          </Logo>
          {location.pathname === "/new_bet" && (
            <NavLink to="/dashboard">Home</NavLink>
          )}
        </LogoContainer>
        <NavContainer>
          {location.pathname !== "/profile" ? (
            <>
              <NavLink to="/profile">Account</NavLink>
              <LogoutButton onClick={logoutHandler}>
                Logout
                <Arrow />
              </LogoutButton>
            </>
          ) : (
            <>
              <NavLink to="/dashboard">Home</NavLink>
              <NewBet to="/new_bet">
                New Bet
                <Arrow />
              </NewBet>
            </>
          )}
        </NavContainer>
      </Container>
    </>
  );
}
