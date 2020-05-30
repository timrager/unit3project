//=======================
// DEPENDENCIES
//=======================
const express = require('express');
const router = express.Router();

//=======================
// MODELS
//=======================
const Plants = require('../models/plants.js');
const User = require('../models/user.js');

//=======================
// GET
//=======================
router.get('/', (req,res) => {
    Plants.find({}, (err, foundPlants) => {
        res.json(foundPlants);
    })
})

module.exports = router;