const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");
const newRouter = require("./newRouter");

indexRouter.get("/", indexController.get);
indexRouter.get("/new", newRouter);
indexRouter.post("/new", newRouter);

module.exports = indexRouter;
