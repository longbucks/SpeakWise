require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

// Loads dotenv file

//create mongodb connection

const db = process.env.MONGODB;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: "true"
  })
  .then(console.log(`db connection is successful`))
  .catch(err => console.log(err));
// if connection is unsuccssful throws the erros defined below

// creates a path for variable vids to route to.
const vids = require("./routes/vids");
const app = express();
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
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.basename(file.originalname)
    );
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
    console.log(req.file);
    res.send(req.file);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
app.get("/uploadVideo", (req, res) => {
  res.send(req.file);
});
app.use("/api/v1/vids", vids);

// sets the port vaible to the dot env or default to 4040
const PORT = process.env.PORT || 4040;
//execute server
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
