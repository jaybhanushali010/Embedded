// var express = require("express");
// var app = express();
// var bodyParser = require('body-parser');
// var errorHandler = require('errorhandler');
// var methodOverride = require('method-override');
// var MS = require("mongoskin");
// var hostname = process.env.HOSTNAME || 'localhost';
// var port = 8080;

// var accX, accY, accZ, pos;

// var db = MS.db("mongodb://127.0.0.1:27017/sensorData");

// app.get("/", function (req, res) {
//     res.redirect("index.html")
// });

// app.get("/sendData", function (req, res) {
//     accX = req.query.x
//     accY = req.query.y
//     accZ = req.query.z
//     pos = req.query.pos
//     req.query.time = new Date().getTime();
//     console.log(req.query);
    

//    db.collection("data").insertOne(req.query, function(result, err){
//        console.log(result, err);
//     res.send("1");
//    });
// });


// app.get("/getData", function (req, res) {
//     var ret = {
//       x: accX,
//       y: accY,
//       z: accZ,
//       pos: pos // Include the posture information
//     };
  
//     res.json(ret); // Send the response as JSON
//   });
  

// app.use(methodOverride());
// app.use(bodyParser());
// app.use(express.static(__dirname + '/public'));
// app.use(errorHandler());

// console.log("Simple static server listening at http://" + hostname + ":" + port);
// app.listen(port);

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var MS = require("mongoskin");
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

// Use an array to store data for each request
var sensorData = [];

var db = MS.db("mongodb://127.0.0.1:27017/sensorData");

app.get("/", function (req, res) {
    res.redirect("index.html")
});

app.get("/sendData", function (req, res) {
    var data = {
        x: req.query.x,
        y: req.query.y,
        z: req.query.z,
        pos: req.query.pos,
        time: new Date().getTime()
    };

    console.log(data);
    
    // Store data in the array
    sensorData.push(data);

    db.collection("data").insertOne(data, function(result, err){
        console.log(result, err);
        res.send("1");
    });
});

app.get("/getData", function (req, res) {
    // Retrieve the latest data from the array
    var latestData = sensorData[sensorData.length - 1];

    res.json(latestData); // Send the response as JSON
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);

