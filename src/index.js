import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import NewApp from "./NewApp";
import { PersistGate } from "redux-persist/integration/react";
import { store, persist } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <NewApp />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
