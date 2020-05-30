//=======================
// DEPENDENCIES
//=======================
const express = require('express');
const mongoose = require('mongoose');
const plantsController = require('./controllers/oxygen.js');

//=======================
// VARIABLES
//=======================
const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oxygen';
const PORT = process.env.PORT || 3000;

//=======================
// MIDDLEWARE
//=======================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use('/oxygen', plantsController)

//=======================
// MONGODB CONNECTION
//=======================
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log('connected to mongo', mongoURI);
})
mongoose.connection.on('error', (error) => console.log(error.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

//=======================
// LISTENING
//=======================
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})