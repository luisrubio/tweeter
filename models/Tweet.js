const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TweetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  tweet: {
    type: String,
    required: true
  },
  likes: [
    {
      user: {
        type: Date,
        default: Date.now
      }
    }
  ],
  comments: [
    {
      name: {
        type: String,
        required: true
      },
      handle: {
        type: String,
        required: true
      },
      avatar: {
        type: String
      },
      tweet: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);
