import { Switch, Route } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { NewBet } from './pages/NewBet';
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';

export function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route path="/new_bet" component={NewBet} />
      </Switch>
    </>
  )
};