// modules
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// app
var app = express();

// config
// require db.js from local folder /config
var db = require("./config/db");

// set port
var port = process.env.PORT || 3000; // 3000 by default

// connect to MongoDB database
// use after you enter credentials in config/db.js
// mongoose.connect(db.url); // commented for now

// ready to get all data from POST parameters
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({type: "application/vnd.api+json"}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride("X-HTTP-Method-Override"));
// set the static files location
app.use(express.static(__dirname + "/public"));

// routes
require("./app/routes")(app); // configure routes

// start application
app.listen(port); // start listen at port 3000

// show some log
console.log("Server started at port " + port);

// expose app
exports = module.exports = app;
