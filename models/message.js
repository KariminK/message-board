class MessageModel {
  #messages;
  #idCounter;
  constructor() {
    this.#messages = [];
    this.#idCounter = 1;
  }
  get(id) {
    if (!id) return this.#messages;
    else return this.#messages.find((message) => message.id === id);
  }
  add({ text, user }) {
    this.#messages.push({
      text,
      user,
      date: new Date(),
      id: this.#idCounter,
    });
    this.#idCounter++;
  }
  remove(id) {
    this.#messages = this.#messages.filter((message) => message.id !== id);
  }
  update(id, newText) {
    this.#messages.forEach((message) => {
      if (message.id === id) message.text = newText;
    });
  }
}
module.exports = MessageModel;
