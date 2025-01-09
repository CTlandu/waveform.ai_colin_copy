// user definition

// import mongoose
const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: 'user'},
    permissions: [{type: String}],
    status: {type: String, default: 'active'},
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);