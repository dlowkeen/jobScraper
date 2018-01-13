const express = require("express");
const mongojs = require('mongojs');
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
});
module.exports = (app) => {
    app.get("/", function(req, res) {
        res.send({hi: "there"});
    });

    app.post('/search', function(req, res) {

        // Initiates data scraping
        require('./scraper');
        console.log(results);

        // insert scraping data into jobs
        // db.jobs.insert(req.body, function(err, result) {
        //     if (err) {
        //         res.send("Error: ", error);
        //     } else {
        //         res.send("Success");
        //     }
        // })
    })

}