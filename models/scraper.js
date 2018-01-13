// ==========================PACKAGES=====================
const cheerio = require("cheerio");
const request = require("request");
const mongoose = require('mongoose');
const mongojs = require('mongojs');

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
});

request("https://weworkremotely.com/jobs", function(error, response, html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  let $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  let results = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("a", "li").each(function(i, element) {
    // Save the text of the element in a "title" variable
    let company = $(element)
      .children(".company")
      .text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    let link = $(element).attr("href");

    let title = $(element)
      .children(".title")
      .text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      company: company,
      title: title,
      link: link
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  // console.log(results);

  // log scraped information into mongodb
  db.jobs.insert({results});
});
