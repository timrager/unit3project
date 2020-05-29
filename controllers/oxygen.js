<<<<<<< HEAD
const express = require('express');
const router = express.Router();

// Import Model
// const Plants = require('../models/pants.js');
// const Users = require('../models/users.js');
// For when we have the models set up

// Index Route
router.get('/', (req, res) => {
    res.send('Hello World!');
})
=======
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
>>>>>>> 3ea546066bb52c9ea36168d85275d55ee291ef7b
