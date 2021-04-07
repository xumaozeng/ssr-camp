import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../src/App";

// 注水 客户端入口
const Page = <BrowserRouter>{App}</BrowserRouter>;
ReactDOM.hydrate(Page, document.getElementById("root"));
