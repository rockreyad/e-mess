const mongoose = require("mongoose");

const Sheet = mongoose.model(
  "Sheet",
  new mongoose.Schema(
    {
      title: {
        type: String,
        trim: true,
        minlength: 3,
      },
      mess: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mess",
      },
      manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      deposit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Deposit",
      },
      closed: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  )
);

module.exports = Sheet;
