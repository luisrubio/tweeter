const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TokenSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Token = mongoose.model('token', TokenSchema);
