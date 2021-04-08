import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import App from "../src/App";

// 注水 客户端入口
const Page = (
  <Provider store={store}>
    <BrowserRouter>{App}</BrowserRouter>
  </Provider>
);
ReactDOM.hydrate(Page, document.getElementById("root"));
