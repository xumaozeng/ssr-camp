// 这里的node代码，会用babel处理
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import App from "../src/App";

const app = express();

app.get("/", (req, res) => {
  const Page = <App title="开课吧"></App>;
  // 把React组件解析成HTML
  const content = renderToString(Page);
  // 字符串模板
  res.send(`
    <html>
     <head>
      <meta charset="utf-8"/>
      <title>react ssr</title>
     </head>
     <body>
      <div id="root">${content}</div>
     </body>
    </html>
    `);
});

app.listen(9001, () => {
  console.log("监听完毕");
});
