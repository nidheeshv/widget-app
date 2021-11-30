import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalStateContextProvider from "./context/GlobalStateContext";

ReactDOM.render(
  <GlobalStateContextProvider>
    <App />
  </GlobalStateContextProvider>,
  document.getElementById("root")
);
