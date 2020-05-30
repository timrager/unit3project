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
// ROUTES
//=======================
// GET
router.get('/', (req,res) => {
    Plants.find({}, (err, foundPlants) => {
        res.json(foundPlants);
    })
})

// POST
router.post('/', (req, res) => {
    User.create(req.body, (error, createdUser) => {
        res.json(createdUser);
    });
})

// DESTROY
router.delete('/:id', (req, res) => {
    Plants.findByIdAndRemove(req.params.id, (error, deletedPlant) => {
        res.json(deletedPlant);
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (error, updatedUser) => {
        res.json(updatedUser);
    }
})

module.exports = router;