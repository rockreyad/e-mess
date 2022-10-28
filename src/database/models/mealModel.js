const mongoose = require("mongoose");

const Info = mongoose.Schema({
  _id: false,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  meal: {
    type: Number,
    default: 0,
    required: true,
  },
  requestMeal: {
    type: Number,
    max: 5,
    default: 0,
  },
  provide: {
    type: Boolean,
    default: false,
  },
});

const Meal = mongoose.model(
  "Meal",
  new mongoose.Schema(
    {
      date: {
        type: String,
      },
      sheet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sheet",
        required: true,
      },
      shift: {
        type: String,
        enum: ["day", "night"],
        required: true,
      },
      info: [Info],
      status: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Meal;
