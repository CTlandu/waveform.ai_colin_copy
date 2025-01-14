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
    capacity: {type: Number, default: 0},
    registration_deadline: {type: Date, required: true},
    fee: {type: Number, default: 0},
}, {timestamps: true});

module.exports = mongoose.model('events', eventSchema);