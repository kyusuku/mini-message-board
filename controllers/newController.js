const db = require("../db/queries");

module.exports = {
  get: (req, res) => {
    res.render("form");
  },
  post: async (req, res) => {
    await db.addMessage(
      req.body.messageText,
      req.body.authorName,
      new Date().toDateString()
    );
    res.redirect("/");
  },
};
