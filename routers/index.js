const express = require("express");
const indexRouter = express.Router();
const MessageController = require("../controllers/MessageController");

// TO-DO: new route

indexRouter.get("/", MessageController.getMessages);

module.exports = indexRouter;
