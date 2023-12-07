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


const app = express();
// const port = 3000; // Change this to your desired port

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

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


// // --------------------------------------------------------------------------

// // server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000; // Change this to your desired port

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // Parse application/json
// app.use(bodyParser.json());

// // Serve static files (HTML, CSS, JS)
// app.use(express.static(path.join(__dirname, 'public')));

// // Route to handle the POST request
// app.post('/update_space_counter', (req, res) => {
//     const spaceCounter = req.body.space_counter;

//     // Handle the received spaceCounter data as needed
//     console.log(`Received space counter: ${spaceCounter}`);

//     // Send a response back to the Python script
//     res.status(200).send('Space counter received successfully.');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

///--------------------------------------------------------------------

// var express = require("express");
// var app = express();
// var bodyParser = require('body-parser');
// var errorHandler = require('errorhandler');
// var methodOverride = require('method-override');
// var hostname = process.env.HOSTNAME || 'localhost';
// var port = 8080;

// var parkval;

// app.get("/", function (req, res) {
//     res.redirect("index.html");
// });

// app.post("/update_space_counter", function (req, res) {
//     parkval = req.body.space_counter;
//     // Handle the received spaceCounter data as needed
//     console.log(`Available parking space: ${parkval}`);
    
//     // Send a response back to the Python script
//     res.send("Space counter received successfully.");
// });

// app.get("/get_space_counter", function (req, res) {
//     var ret = {
//         space_counter: parkval
//     };
//     res.send(JSON.stringify(ret));
// });

// app.use(methodOverride());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// app.use(errorHandler());

// console.log("Simple static server listening at http://" + hostname + ":" + port);
// app.listen(port);
