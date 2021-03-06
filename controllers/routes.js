const mongojs = require('mongojs');
const mongoose = require('mongoose');

// Database configuration
let databaseURL = 'weworkremotely';
let collections = ['jobs'];

// use mongojs to hook into database
let db = mongojs(databaseURL, collections);

// log any errors with database
db.on("error", function(error) {
    console.log("Database error: ", error);
});

// =================ROUTES=========================
module.exports = (app) => {
    // test route
    app.get("/hi", function(req, res) {
        res.send({hi: "there"});
    });

    app.get('/', function(req, res) {
        db.jobs.find({}, function(error, found) {
            var hbsObject = { jobs: found[found.length - 1].results };
            if (error) {
                console.log("error: ", error);
            } else {
                res.render("index", hbsObject);
            }
        });
    });

    // app.get("/about", function(req, res) {
    //     res.render("about");
    // });

}
