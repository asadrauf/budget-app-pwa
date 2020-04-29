const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//const mongojs = require("mongojs");
const compression = require("compression");

const PORT = 3003;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://appwork:appwork12@ds161485.mlab.com:61485/heroku_dc0k3fxg", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});