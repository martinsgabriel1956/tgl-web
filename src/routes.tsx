import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NewBet } from "./pages/NewBet";
import { Register } from "./pages/Register";
import { ResetPassword } from "./pages/ResetPassword";

import { authActions } from "./store/auth";

type RootState = {
  auth: {
    isLoggedIn: boolean;
  };
};

export function Routes() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  let email: string | null = localStorage.getItem("email");
  let password: string | null = localStorage.getItem("password");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const autoLogin = () => {
    if (email && password) {
      dispatch(authActions.login({ email, password }));
    }
  };

  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return (
    <>
      <Switch>
        {isLoggedIn && (
          <>
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new_bet" component={NewBet} />
          </>
        )}
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}
