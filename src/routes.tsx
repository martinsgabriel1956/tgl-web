import { Switch, Route } from 'react-router-dom';

export function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/reset_password" />
        <Route path="/profile" />
        <Route path="/new_bet" />
      </Switch>
    </>
  )
};