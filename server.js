const express = require('express');
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize Express
let app = express();
// set the app up to use bodyParser and the static public folder
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static("public"));

// Database configuration
let databaseURL = 'weworkremotely';
let collections = ['jobs'];

// use mongojs to hook into database
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/weworkremotely";
mongoose.connect(MONGODB_URI);
let db = mongojs(databaseURL, collections);

// log any errors with database
db.on("error", function(error) {
    console.log("Database error: ", error);
})

// Initiate routing
require('./routes')(app);

// // Initiates data scraping
require('./scraper');

// Set the app to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});