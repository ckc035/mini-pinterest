import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

// main是页面的主区域 当url变了 我们的设计是TopBar不用变 main变 所以得config在main里
// Switch == switch case == if else
// localhost:3000/login ==> /login
// because we need to rerender when url changes, we need to have a change in state to
// initiate rerender of this component, rather than making the browser reload and start from requesting
// html
function Main(props) {
  const { isLoggedIn, handleLoggedIn } = props;

  const showLogin = () => {
    return isLoggedIn ? (
      <Redirect to="/home" />
    ) : (
      <Login handleLoggedIn={handleLoggedIn} />
    );
  };

  const showHome = () => {
    return isLoggedIn ? <Home /> : <Redirect to="/login" />;
  };

  // exact is for path
  // component vs render -> componenet写死的 直接让他去register
  // Switch == if else statements
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact render={showLogin} />
        <Route path="/login" render={showLogin} />
        <Route path="/register" component={Register} />
        <Route path="/home" render={showHome} />
      </Switch>
    </div>
  );
}

export default Main;
