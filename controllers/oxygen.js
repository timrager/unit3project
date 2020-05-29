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