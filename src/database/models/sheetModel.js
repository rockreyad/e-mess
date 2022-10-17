const mongoose = require('mongoose');

const Sheet = mongoose.model("Sheet", new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3,
    },
    
}))