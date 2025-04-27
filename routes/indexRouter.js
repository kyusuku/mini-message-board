const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

const messages = [
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

indexRouter.get("/", indexController.get);

module.exports = indexRouter;
