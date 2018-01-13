const mongojs = require('mongojs');

// Database configuration
let databaseURL = 'weworkremotely';
let collections = ['jobs'];

// use mongojs to hook into database
let db = mongojs(databaseURL, collections);

// log any errors with database
db.on("error", function(error) {
    console.log("Database error: ", error);
});

// ========= ROUTES
module.exports = (app) => {
    // app.use(express.static("public"));

    app.get("/hi", function(req, res) {
        res.send({hi: "there"});
    });

    app.get('/all', function(req, res) {
        console.log("testing");
        db.jobs.find({}, function(error, found) {
            if (error) {
                console.log("error: ", error);
            } else {
                res.json(found);
            }
        });
    });

}