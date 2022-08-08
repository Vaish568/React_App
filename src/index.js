import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import NewApp from "./NewApp";
import Apps from "./Recursive";
import Recursive from "./Recursive";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <NewApp />
  </Provider>,
  document.getElementById("root")
);
