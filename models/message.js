class Messages {
  constructor() {
    this.messages = [
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
  }
  get() {
    return this.messages;
  }
  add({ text, user }) {
    this.messages.push({ text, user, date: new Date() });
  }
}
module.exports = Messages;
