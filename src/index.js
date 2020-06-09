import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { UserInfoProvider } from "./hooks/UserInfosContext";

ReactDOM.render(
  <UserInfoProvider>
    <App />
  </UserInfoProvider>,
  document.getElementById("root")
);
