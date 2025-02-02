const express = require("express");
const morgan = require("morgan");
const app = express();

// app.use(morgan("dev"));
app.use((req, res, next) => {
  req.timeRequest = Date.now();
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("Hello halaman");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
