const MessageController = require("./MessageController");

describe("Message controller", () => {
  it("should render on getMessages() call", () => {
    const res = {
      render: jest.fn(),
    };
    MessageController.getMessages(null, res);
    expect(res.render).toBeCalled();
  });
});
