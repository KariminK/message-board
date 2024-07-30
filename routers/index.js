const express = require("express");
const MessageModel = require("../models/message");
const indexRouter = express.Router();

// TO-DO: new route
const Messages = new MessageModel();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Online Cafe", messages: Messages.get() });
});

module.exports = indexRouter;
