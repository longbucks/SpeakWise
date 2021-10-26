const express = require("express");
const router = express.Router();
const videoController = require("../controllers/vidsController");
// const multer = require("multer");

router
  .route("/")
  .get(videoController.getAllVideos)
  .post(videoController.createAVideo);

router.route("/:id").get(videoController.getOneVideo);

module.exports = router;
