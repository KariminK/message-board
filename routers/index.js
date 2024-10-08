const { Router } = require("express");
const indexRouter = Router();
const MessageController = require("../controllers/MessageController");

// TO-DO: new route

indexRouter.get("/new", (req, res) => {
  res.render("form");
});
indexRouter.post("/new", MessageController.addMessage);
indexRouter.get("/", MessageController.getMessages);

module.exports = indexRouter;
