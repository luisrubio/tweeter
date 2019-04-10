const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const tweets = require("./routes/api/tweets");
const app = express();
const port = 5000;

// body parser middle
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;

// connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/tweets", tweets);

app.listen(port, () => console.log(`Tweeter App listening on port ${port}!`));
