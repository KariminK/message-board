const express = require("express");
const indexRouter = express.Router();

// TO-DO: new route

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Online Cafe", messages: messages });
});

module.exports = indexRouter;
