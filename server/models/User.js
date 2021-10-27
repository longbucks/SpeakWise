const mongoose = require("mongoose");

const Users = mongoose.Schema({
  Fname: String,
  Lname: String,
  email: {
    type: String,
    required: [true, "Must be an email"]
  },
  usename: {
    type: String,
    unique: true,
    required: [true, "Username is required"]
  },
  password: {
    type: String,
    unique: true,
    required: [true, "Password is required"]
  },

  entity: { type: String, required: true }
});

const User = mongoose.model("User", Users);
