//=======================
// DEPENDENCIES
//=======================
const mongoose = require('mongoose');

//=======================
// USER SCHEMA
//=======================
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

//=======================
// MODEL
//=======================
const User = mongoose.model('User', userSchema);

module.exports = User;