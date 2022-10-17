const mongoose = require("mongoose");

//native promises
mongoose.Promise = global.Promise;

//Initialize Mongoose
const db = {};
db.mongoose = mongoose;
db.User = require("./userModel");

module.exports = db;
