const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
  console.log("middleware 1 after next");
});
app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});

app.get("/halaman", (req, res) => {
  res.send("Hello halaman");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
