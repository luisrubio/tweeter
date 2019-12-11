const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TokenSchema = new Schema({
  user: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  tasks: [
    {
      title: {
        type: String,
        required: true
      },
      blockID: {
        type: Number,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      },
      overdue: {
        type: Boolean,
        default: false
      },
      timeSent: {
        type: Number,
        default: Date.now()
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Token = mongoose.model('token', TokenSchema);
