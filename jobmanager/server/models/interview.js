const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  description: String,
  type: String,
  status: String,
  date: String,
  link: String,
  simulationDate: String,
  simulationDateArray: Array
});

const Interview = mongoose.model("Interview", interviewSchema);
module.exports = Interview;
