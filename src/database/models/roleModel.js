const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name : {
            type: String,
            required : true,
            enum : ["user","manager","admin"],
            unique : true
        }
    }, {
        timestamps : true
    })
) 

module.exports = Role;