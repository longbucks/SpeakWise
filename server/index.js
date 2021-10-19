const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Working just fine" });
});

app.listen(8080, () => {
  console.log("listen on port 8080");
});
app.listen();
