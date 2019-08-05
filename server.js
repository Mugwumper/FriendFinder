
var express = require("express");
var bodyParser = require("body-parser");

// Server Routing Map
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');


var app = express();

// set the port, default to 8080 if no environment variable found.
var PORT = process.env.PORT || 8081;

// set up Express 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiRoutes(app);
htmlRoutes(app);

// Start listening
app.listen(PORT, function() {
    console.log("Friend Finder listening on PORT: " + PORT);
  });