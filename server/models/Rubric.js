const mongoose = require("mongoose");

const RubricSchema = mongoose.Schema({
  Pacing: Number,
  Pitch: Number,
  Enunciation: Number,
  EyeContact: Number,
  Volume: Number
});

const Rubric = mongoose.model("rubric", RubricSchema);
module.exports = Rubric;
