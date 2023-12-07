// server.js

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

// const express = require('express');
// const bodyParser = require('body-parser');

app.get("/", function (req, res) {
    res.redirect("index1.html")
});

const app = express();
// const port = 3000; // Change this to your desired port

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Route to handle the POST request
app.post('/update_space_counter', (req, res) => {
    const spaceCounter = req.body.space_counter;

    // Handle the received spaceCounter data as needed
    console.log(`Available Parking space : ${spaceCounter}`);

    // Send a response back to the Python script
    res.status(200).send('Space counter received successfully.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
