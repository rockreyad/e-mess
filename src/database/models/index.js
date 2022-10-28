const mongoose = require("mongoose");

//native promises
mongoose.Promise = global.Promise;

//Initialize Mongoose
const db = {};
db.mongoose = mongoose;
db.User = require("./userModel");
db.Role = require("./roleModel");
db.Category = require("./categoryModel");
db.Mess = require("./messModel");
db.Meal = require("./mealModel");
db.Sheet = require("./sheetModel");
db.Deposit = require("./depositModel");

module.exports = db;
