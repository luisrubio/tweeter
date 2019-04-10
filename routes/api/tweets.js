const express = require("express");
const router = express.Router();

// Models
const Tweet = require("../../models/Tweet");

// @route     GET api/tweets/test
// @desc      Test route
// @access    Public
router.get("/test", (req, res) => {
  res.json({ msg: "success" });
});

// @route     GET api/tweets
// @desc      get tweets
// @access    Public
router.get("/", (req, res) => {
  Tweet.find()
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: "No tweets found" }));
});

// @route     POST api/tweets
// @desc      create tweet
// @access    Public
router.post("/", (req, res) => {
  const newTweet = new Tweet({
    name: "John Smith",
    handle: "John_Smith",
    avatar: "https://vanillicon.com/v2/2adc83bfb66efdc08b3d049a160c316a.svg",
    tweet: req.body.tweet
  });

  newTweet.save().then(tweet => res.json(tweet));
});

module.exports = router;
