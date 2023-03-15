import React from "react";
import logo from "../assets/images/logo.svg";

import { LogoutOutlined } from "@ant-design/icons";

// app 传下来 props （isLoggedIn function (its a state in app))
function TopBar(props) {
  //                 handleLogout (also defined in app.js) will change the state of isLoggedIn
  const { isLoggedIn, handleLogout } = props;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="App-title">Around Web</span>
      {isLoggedIn ? (
        <LogoutOutlined className="logout" onClick={handleLogout} />
      ) : null}
    </header>
  );
}

export default TopBar;
