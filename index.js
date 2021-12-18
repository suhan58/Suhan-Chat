const auth = require("./routes/auth");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled...");
}
app.use("/auth", auth);

app.get("/", async (req, res, next) => {
  res.send("DASH API");
});

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Running server on port ${port}....`);
});

module.exports = server;
