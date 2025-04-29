const db = require("../db/queries");

module.exports = {
  get: async (req, res) => {
    const messages = await db.getMessages();
    res.render("index", {
      title: "Mini Messageboard",
      messages: messages,
    });
  },
};
