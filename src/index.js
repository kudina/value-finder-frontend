import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/Georgia/Georgia.ttf";
import "./fonts/Georgia/GeorgiaRegularfont.ttf";
import "./fonts/Rubik/Rubik-Medium.ttf";
import "./fonts/Rubik/Rubik-Regular.ttf";

import { Provider } from "react-redux";
import store from "./app/store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
