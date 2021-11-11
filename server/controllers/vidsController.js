const Video = require("../models/Vids");
const multer = require("multer");
const path = require("path");

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find(req.query);
    res.status(200).json({
      status: "Success",
      data: { videos }
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "video not found",
      error
    });
  }
};

exports.getOneVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: { video }
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Video Not Found"
    });
  }
};

exports.createAVideo = async (req, res) => {
  try {
    const newVideo = await Video.create(req.body);
    res.status(201).json({
      status: "Created",
      data: { newVideo }
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "invalid data sent"
    });
  }
};
