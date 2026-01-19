const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  rollNo: Number,
  parentName: String,
});

module.exports = mongoose.model("Student", studentSchema);
