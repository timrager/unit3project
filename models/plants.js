//=======================
// DEPENDENCIES
//=======================
const mongoose = require('mongoose');

//=======================
// PLANTS SCHEMA
//=======================
const plantsSchema = new mongoose.Schema({
    name: String
});

//=======================
// MODEL
//=======================
const Plants = mongoose.model('Plants', plantsSchema);

module.exports = Plants;