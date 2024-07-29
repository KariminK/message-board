const Messages = require("./message");

describe("Messages model", () => {
  it("should return messages on get() method call", () => {
    const messages = new Messages();
    messages.add({ text: "lorem ipsum", user: "example1" });
    messages.add({ text: "lorem ipsum dolor sit amet", user: "example2" });
    expect(messages.get()).toMatchObject([
      { text: "lorem ipsum", user: "example1" },
      { text: "lorem ipsum dolor sit amet", user: "example2" },
    ]);
  });
  it("should add message on add() function call", () => {
    const messages = new Messages();
    messages.add({ text: "lorem ipsum", user: "example1" });
    expect(messages.get()).toMatchObject([
      { text: "lorem ipsum", user: "example1", id: 1 },
    ]);
    expect(messages.get()[0]).toHaveProperty("date");
  });
  it("should remove message with given id", () => {
    const messages = new Messages();
    messages.add({ text: "lorem ipsum", user: "example1" });
    messages.add({ text: "lorem ipsum dolor sit amet", user: "example2" });
    expect(messages.get()).toMatchObject([
      { text: "lorem ipsum", user: "example1", id: 1 },
      { text: "lorem ipsum dolor sit amet", user: "example2", id: 2 },
    ]);
    messages.remove(1);
    expect(messages.get()).toMatchObject([
      { text: "lorem ipsum dolor sit amet", user: "example2", id: 2 },
    ]);
  });
});
