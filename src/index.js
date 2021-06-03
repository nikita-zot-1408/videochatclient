import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ContextProvider } from "./SocketContext";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
