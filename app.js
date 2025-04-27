const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
