const mongoose = require('mongoose');

// Define the CBCS schema
const CBCSSchema = new mongoose.Schema({
  Course: {
    type: String,
    required: true
  },
  Year: {
    type: String,
    required: true
  },
  Semester: {
    type: String,
    required: true
  },
  Subject: {
    type: String,
    required: true
  },
  Text: {
    type: String,
    required: true
  },
  Mark: {
    type: Number,
    required: true
  },
  Imp: {
    type: Boolean,
    default: false
  }
});

// Create and export the model
const CBCS = mongoose.model('CBCS', CBCSSchema);

module.exports = CBCS;
