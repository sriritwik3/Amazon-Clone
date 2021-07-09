import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Reducer, initialState } from "./Reducer";
import { StateProvider } from "./Context";

ReactDOM.render(
  <>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </>,
  document.getElementById("root")
);
