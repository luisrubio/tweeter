const express = require('express');
const router = express.Router();
const faker = require('faker');

// Models
const Tweet = require('../../models/Tweet');

// @route     GET api/tweets/test
// @desc      Test route
// @access    Public
router.get('/test', (req, res) => {
  res.json({ msg: 'success' });
});

// @route     GET api/tweets
// @desc      get tweets
// @access    Public
router.get('/', (req, res) => {
  Tweet.find()
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

// @route     POST api/tweets
// @desc      create tweet
// @access    Public
router.post('/', (req, res) => {
  const newTweet = new Tweet({
    name: req.body.name,
    handle: req.body.status,
    avatar: req.body.amount,
    tweet: req.body.tweet
  });

  newTweet.save().then(tweet => res.json(tweet));
});

// @route     PUT api/tweets
// @desc      create tweet
// @access    Public
router.delete('/:id', (req, res) => {
  Tweet.findByIdAndDelete(req.params.id)
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

// @route     POST api/tweets/:id/like
// @desc      like a tweet
// @access    Public
router.post('/:id/like', (req, res) => {
  // find post
  Tweet.findById(req.params.id)
    .then(tweet => {
      tweet.likes.push({ user: Date.now() });
      tweet.save().then(tweet => res.json(tweet));
    })
    .catch(err => res.json({ err: 'tweet not found!' }));
  // push like
});

module.exports = router;
