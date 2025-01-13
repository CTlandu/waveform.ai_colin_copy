// performance model

//import mongoose
const mongoose = require("mongoose");

//performance schema
const performanceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type:String, required: true},
    date: {type:Date, required: true},
    time: {type: String, required: true},
    location: {type: String, required: true},
    organizer: {type: String, default: "admin"},
    participants: [{type:String}],
    analytics: {
        views : {type: Number, default: 0},
        registrations: {type: Number, default: 0}
        //more metrics if needed
    }
}, {timestamps: true});

module.exports = mongoose.model('performances', performanceSchema);