const mongoose = require("mongoose");

const Sheet = mongoose.model(
  "Sheet",
  new mongoose.Schema(
    {
      month: String,
      mess: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mess",
      },
      members: [
        {
          _id: false,
          userInfo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          mealStatus: {
            type: Boolean,
            default: true,
          },
        },
      ],
      manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      // categories: [String],
      categories: {
        initial: [
          {
            type : mongoose.SchemaTypes.ObjectId,
            ref : "Category"
          }
        ],
        custom : [String]
      },

      status: {
        type: Boolean,
        default: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Sheet;
