const messages = require("../data/message");

module.exports = {
  get: (req, res) => {
    res.render("form");
  },
  post: (req, res) => {
    messages.push({
      text: req.body.messageText,
      user: req.body.authorName,
      added: new Date().toDateString(),
    });
    res.redirect("/");
  },
};
