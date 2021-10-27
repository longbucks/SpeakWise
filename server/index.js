const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const dotenv = require("dotenv");
const app = express();
// Loads dotenv file
dotenv.config();
//create mongodb connection
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
// if connection is unsuccssful throws the erros defined below
db.on("error", console.error.bind(console, "Connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
// creates a path for variable vids to route to.
const vids = require("./routes/vids");
// Shows the request excuted and the time
const logging = (req, res, next) => {
  console.log(`${req.method}${req.url}    Time: ${Date.now()}`);
  next();
};
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

// parses req.body entered
app.use(express.json());
app.use(logging);
app.use(cors);

const videoStorage = multer.diskStorage({
  destination: "server/videos", // Destination to store video
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  }
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 100000000000 // 10000000 Bytes = 10 MB
  },
  fileFilter(req, file, cb) {
    // upload only mp4 and mkv format
    if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
      return cb(new Error("Please upload a video"));
    }
    cb(undefined, true);
  }
});
// app.get("/", (req, res) => {
//   res.send("Hello People");
// });
app
  .get("/status", (req, res) => {
    res.status(200).json({ message: "service healthy" });
  })
  .post((req, res) => {
    res.json({ requestBody: req.body });
  });
app.post(
  "/uploadVideo",
  videoUpload.single("video"),
  (req, res) => {
    res.send(req.file);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
// sets the port vaible to the dot env or default to 4040
const PORT = process.env.PORT || 4040;
// app.use("/api/v1/vids", vids);
//execute server
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
