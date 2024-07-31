require("dotenv").config();
const express = require("express");
const indexRouter = require("./routers/index");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  console.log("Server listening! PORT: " + process.env.PORT);
});
