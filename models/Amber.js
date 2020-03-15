var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var AmberSchema = new Schema({
  cab: {
    type: String,
    required: true,
  },
  rmu: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  serial: {
    type: String,
    required: true,
  },
  alert: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

// This creates our model from the above schema, using mongoose's model method
var Amber = mongoose.model("Amber", AmberSchema, "Amber");

module.exports = Amber;