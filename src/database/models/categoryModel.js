const mongoose = require("mongoose");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema(
    {
      name: {
        type: String,
        enum: ["utility", "meal"],
      },
    },
    { timestamps: true }
  )
);

module.exports = Category;
