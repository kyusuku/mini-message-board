const messages = require("../data/message");

module.exports = {
  get: (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
  },
};
