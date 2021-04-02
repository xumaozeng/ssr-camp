import React from "react";
import ReactDOM from "react-dom";

import App from "../src/App";

// 注水 客户端入口
ReactDOM.hydrate(App, document.getElementById("root"));
