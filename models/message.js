class Messages {
  #messages;
  #idCounter;
  constructor(messages) {
    this.#messages = [];
    this.idCounter = 1;
  }
  get() {
    return this.#messages;
  }
  add({ text, user }) {
    this.#messages.push({
      text,
      user,
      date: new Date(),
      id: this.idCounter,
    });
    this.idCounter++;
  }
  remove(id) {
    this.#messages = this.#messages.filter((message) => message.id !== id);
  }
}
module.exports = Messages;
