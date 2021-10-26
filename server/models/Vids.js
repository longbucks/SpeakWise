const mongoose = require("mongoose");
// const user = require("./Users");

const vidSchema = new mongoose.Schema({
  status: {
    type: String
    // default: false
  },
  file_id: {
    type: String,
    required: [true, "file_id must be a string"],
    unique: true
  },
  student_id: {
    type: String
  }
});

// const reviewedSchema = new mongoose.Schema({

// });

const Vid = mongoose.model("Vid", vidSchema);

module.exports = Vid;
