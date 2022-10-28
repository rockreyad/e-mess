const mongoose = require("mongoose");

const Expense = mongoose.model(
  "Expense",
  new mongoose.Schema(
    {
      date: {
        type: Date,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      sheet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sheet",
      },
      category: {
        type: String,
        required: true,
        default: "other",
      },
      amount: {
        type: Number,
        min: 1,
        max: [99999, "Amount can't more than 99999"],
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

module.exports = Expense;
