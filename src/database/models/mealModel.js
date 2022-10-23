const mongoose = require("mongoose");

const Meal = mongoose.model(
  "Meal",
  new mongoose.Schema(
    {
      date: {
        type: Date,
        default: Date.now,
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
      mealInfo: {
        user: {
          type: mongoose.Schema.Types.ObjectId, // from
          ref: "User",
        },
        meal: {
          type: Number,
          default: 1,
        },
        requestMeal: {
          type: Number,
          max: 5,
          default: 0,
        },
        provide: {
          type: Boolean,
          default: true,
        },
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Meal;
