const db = require("../data/pool");
class MessageModel {
  #db;
  constructor(db) {
    this.#db = db;
  }
  async get(id) {
    if (!id) return await this.#db.query("SELECT * FROM message");
    else return await this.#db.query("SELECT * FROM message WHERE id=$1", [id]);
  }
  async add({ text, user }) {
    console.log(new Date().toISOString());

    await this.#db.query(
      "INSERT INTO message (text, username, date) VALUES ($1, $2, $3)",
      [text, user, new Date().toISOString()]
    );
  }
  async remove(id) {
    await this.#db.query("DELETE FROM message WHERE id = $1", [id]);
  }
  async update(id, newText) {
    await this.#db.query("UPDATE message SET text=$1 WHERE id=$2", [
      id,
      newText,
    ]);
  }
}
module.exports = new MessageModel(db);
