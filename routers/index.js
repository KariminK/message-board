const express = require("express");
const indexRouter = express.Router();

// TO-DO: new route

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Online Cafe", messages: messages });
});

module.exports = indexRouter;
