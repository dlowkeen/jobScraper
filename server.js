const express = require('express');
const mongojs = require("mongojs");
const mongoose = require("mongoose");

// Initialize Express
let app = express();

// Database configuration
let databaseURL = 'weworkremotely';
let collections = ['jobs'];

// use mongojs to hook into database
let db = mongojs(databaseURL, collections);

// log any errors with database
db.on("error", function(error) {
    console.log("Database error: ", error);
})

// Initiate routing
require('./routes');

// // Initiates data scraping
// require('./scraper');

// Set the app to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});