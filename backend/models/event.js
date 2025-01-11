//event definition

// import mongoose
const mongoose = require('mongoose');

// event schema
const eventSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true},
    location: {type: String, required: true},
    organizer: {type: String, required: true},
    participants: [{type: String}],
    type: {type: String, default: 'event'},
    headcount: {type: Number, default: 0},
    status: {type: String, default: 'open'},
    capacity: {type: Number},
    registration_deadline: {type: Date},
    fee: {type: Number},
}, {timestamps: true});

module.exports = mongoose.model('events', eventSchema);