import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useHeader } from "./useHeader";

import {
	Arrow,
	Container,
	Logo,
	LogoContainer,
	LogoutButton,
	NavContainer,
	NewBet,
} from "./styles";

export function Header() {
	const { logoutHandler, location } = useHeader();

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
