// to do: unit tests!

const Messages = require("../models/message");

module.exports = {
  async getMessages(req, res) {
    const data = await Messages.get();
    res.render("index", { title: "Online Cafe", messages: data.rows });
  },
  addMessage(req, res) {
    Messages.add({
      text: req.body.message,
      user: req.body.username,
    });
    res.redirect("/");
  },
};
