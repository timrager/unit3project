const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const passport = require('../config/passport.js')
const config = require('../config/config.js')
const mongoose = require('../models/user.js')
const User = mongoose.model('User');

router.post('/signup', (req, res) => {
    if (req.body.email && req.body.password) {
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            shippingStreet: req.body.shippingStreet,
            shippingCity: req.body.shippingCity,
            shippingState: req.body.shippingState,
            shippingZip: req.body.shippingZip
        }
        User.findOne({email: req.body.email})
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                var payload = {
                                    id: newUser.id
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            if (user.password === req.body.password) {
                var payload = {
                    id: user.id,
                }
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                    token: token,
                    user: user
                })
            } else {
                res.sendStatus(401)
            }
        } else {
            res.sendStatus(401)
        }
    })
    } else {
        res.sendStatus(401)
    }
    User.findOne({email: req.body.email}, (err, user) => {
        console.log(user);
    })
})

module.exports = router;
