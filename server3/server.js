var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var MS = require("mongoskin");
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

var accX, accY, accZ, gyroX, gyroY, gyroZ, activity;

var db = MS.db("mongodb://127.0.0.1:27017/sensorData");

app.get("/", function (req, res) {
    res.redirect("index.html")
});

app.get("/sendData", function (req, res) {
    console.log(req.query);
    accX = req.query.x1
    accY = req.query.y1
    accZ = req.query.z1
    gyroX = req.query.x2
    gyroY = req.query.y2
    gyroZ = req.query.z2

    activity = req.query.Activity //|| "p"
    req.query.time = new Date().getTime();

    // console.log("Received data:", req.query);
    // console.log("accX:", accX, "accY:", accY, "accZ:", accZ, "pos:", pos);
    

   db.collection("data").insertOne(req.query, function(result, err){
       //console.log(result, err);
    res.send("1");
   });
});


app.get("/getData", function (req, res) {
    var ret = {
      x1: accX,
      y1: accY,
      z1: accZ,
      x2: gyroX,
      y2: gyroY,
      z2: gyroZ,
      Activity: activity // Include the posture information
    };
  
    res.json(ret); // Send the response as JSON
  });
  

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);

