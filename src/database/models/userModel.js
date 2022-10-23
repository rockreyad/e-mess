const mongoose = require("mongoose");
const { isEmail } = require("validator");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      minlength: 3,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter an email"],
      trim: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    _join_mess: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "Please enter a valid password"],
      minlength: [6, "Minimum password length must be 6 characters"],
    },
    token: String,
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    address: {
      country: String,
      street1: String,
      street2: String,
      city: String,
      state: String,
      zip: Number,
    },
    time_stamp: {
      created_at: {
        type: Date,
        default: Date.now,
      },
      signed_at: {
        type: Date,
        default: Date.now,
      },
      update_at: {
        type: Date,
        default: Date.now,
      },
    },
  })
);

module.exports = User;
