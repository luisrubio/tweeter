const express = require('express');
const router = express.Router();
const faker = require('faker');

// Models
const Tweet = require('../../models/Token');

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
    amount: req.body.amount
  });

  newTweet.save().then(tweet => res.json(tweet));
});

// @route     PUT api/tweets
// @desc      create tweet
// @access    Public
router.put('/:id', (req, res) => {
  Tweet.findByIdAndUpdate(req.params.id, req.body)
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));

  //   newTweet.save().then(tweet => res.json(tweet));
});

module.exports = router;
