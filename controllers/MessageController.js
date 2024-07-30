// to do: unit tests!

const MessageModel = require("../models/message");
const initialData = require("../data/initialData");

const Messages = new MessageModel();
const loadData = (messages) => {
  messages.forEach((message) => {
    Messages.add(message);
  });
};

loadData(initialData);

module.exports = {
  getMessages(req, res) {
    res.render("index", { title: "Online Cafe", messages: Messages.get() });
  },
};
