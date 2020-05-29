//=======================
// DEPENDENCIES
//=======================
const express = require('express');
const mongoose = require('mongoose');

//=======================
// VARIABLES
//=======================
const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oxygen';
const PORT = process.env.PORT || 3000;

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