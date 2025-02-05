const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use((req, res, next) => {
  //   req.timeRequest = Date.now();
  console.log(req.method, req.url);
  next();
});

const auth = (req, res, next) => {
  const { password } = req.query;
  if (password === "tabuni") {
    next();
  } else {
    // res.send("anda perlu masukan password");
    throw new Error("anda perlu masukan password");
  }
};

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});

app.get("/halaman", (req, res) => {
  console.log(req.timeRequest);
  res.send("Hello halaman");
});

app.get("/error", (req, res) => {
  bird.fly();
});

app.get("/admin", auth, (req, res) => {
  res.send("Hello admin");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
  console.log("*************************");
  console.log("**********ERROR**********");
  console.log("*************************");
  next(err);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
