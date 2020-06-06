//=======================
// DEPENDENCIES
//=======================
const express = require('express');
const mongoose = require('mongoose');
const passport = require('./config/passport')();
const userController = require('./controllers/user.js')
const plantsController = require('./controllers/oxygen.js');


//=======================
// VARIABLES
//=======================
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oxygen';
const PORT = process.env.PORT || 3000;

//=======================
// MIDDLEWARE
//=======================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use('/user', userController);
app.use('/oxygen', plantsController)

//=======================
// MONGODB CONNECTION
//=======================
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.on('error', (error) => console.log(error.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connection.on('open', ()=>{});

//=======================
// LISTENING
//=======================

// function to negating the need to go to homepage to refresh page
app.get('*', (req, res) => { // This wildcard method handles all requests
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})