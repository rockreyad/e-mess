const mongoose = require("mongoose");

const Deposit = mongoose.model(
  "Deposit",
  new mongoose.Schema(
    {
      date: {
        type: Date,
        required: true,
        trim: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      category: {
        bazar: { type: Boolean, default: false },
        utility: { type: Boolean, default: false },
        required: true,
      },
      amount: {
        type: Number,
        min: 1,
        max: 20000,
        required: true,
        trim: true,
      },
      desc: {
        type: String,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  )
);

module.exports = Deposit;
