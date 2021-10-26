const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
const vids = require("./routes/vids");

const logging = (req, res, next) => {
  console.log(`${req.method}${req.url}    Time: ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);

app
  .route("/status", (req, res) => {
    res.status(200).json({ message: "service healthy" });
  })
  .post((req, res) => {
    res.json({ requestBody: req.body });
  });

const PORT = process.env.PORT || 4040;
app.use("/api/v1/vids", vids);

app.listen(PORT, () => console.log(`listen on port ${PORT}`));
