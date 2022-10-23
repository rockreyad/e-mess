const mongoose = require("mongoose");

//native promises
mongoose.Promise = global.Promise;

//Initialize Mongoose
const db = {};
db.mongoose = mongoose;
db.User = require("./userModel");
db.Role = require("./roleModel");
db.Mess = require("./messModel");
db.Meal = require("./mealModel");

module.exports = db;
