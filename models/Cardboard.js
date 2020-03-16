var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var CardboardSchema = new Schema({
  dc: {
    type: String,
    required: true,
  },
  cab: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  items: {
    type: String,
    required: true,
  }
});

// This creates our model from the above schema, using mongoose's model method
var Cardboard = mongoose.model("Cardboard", CardboardSchema, "Cardboard");

module.exports = Cardboard;