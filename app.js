const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
