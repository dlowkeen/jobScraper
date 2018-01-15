const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobsSchema = new Schema({
  company: company,
  title: title,
  link: "https://weworkremotely.com/" + link
});

mongoose.model("jobs", jobsSchema);
