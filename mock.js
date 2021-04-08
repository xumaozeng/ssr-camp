// 单纯的模拟几个接口

const express = require("express");
const app = express();

app.get("/api/course/list", (req, res) => {
  // 支持跨域调用
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Content-Type", "application/json;chatset=utf-8");
  res.json({
    code: 0,
    list: [
      { name: "Web全栈", id: 1 },
      { name: "JS高级", id: 2 },
      { name: "Web小白", id: 3 },
      { name: "Node架构师", id: 4 }
    ]
  });
});

app.listen(9090, () => {
  console.log("mock启动完毕！");
});
