var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var HandoffSchema = new Schema({
  names: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  datacenter: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Handoff = mongoose.model("Handoff", HandoffSchema, "Handoff");

module.exports = Handoff;