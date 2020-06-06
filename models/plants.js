//=======================
// DEPENDENCIES
//=======================
const mongoose = require('mongoose');

//=======================
// PLANTS SCHEMA
//=======================
const plantsSchema = new mongoose.Schema({
    name: String,
    category: String,
    type: String,
    image: String,
    size: String,
    petFriendly: Boolean,
    plantCare: {
        water: String,
        sun: String
    }
});

//=======================
// MODEL
//=======================
const Plants = mongoose.model('Plants', plantsSchema);

module.exports = Plants;