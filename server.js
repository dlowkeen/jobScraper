const express = require('express');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

// Initialize Express
let app = express();
// set the app up to use bodyParser and the static public folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// // Initiates data scraping
require('./models/scraper');

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Initiate routing
require('./controllers/routes')(app);

// Set the app to listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});