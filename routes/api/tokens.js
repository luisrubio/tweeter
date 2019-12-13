const express = require('express');
const router = express.Router();
const faker = require('faker');
const moment = require('moment');
const momoentTimezone = require('moment-timezone');
// Models
const Tweet = require('../../models/Token');

// @route     GET api/tweets/test
// @desc      Test route
// @access    Public
router.get('/test', (req, res) => {
  res.json({ msg: 'success' });
});

/*******************************
 * ******** GET COLORS ******* *
 *******************************/
// @route     GET api/tweets/test
// @desc      Test route
// @access    Public
router.get('/info', (req, res) => {
  const weekColor = [
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3,
    0,
    1,
    2,
    3
  ];
  const colors = ['purple', 'red', 'blue', 'green'];
  const now = moment().week() - 1;
  const colorID = weekColor[now];

  const time = parseInt(
    // moment()
    //   .tz('America/Chicago')
    //   .format('kmm')
    moment()
      .tz('America/Chicago')
      .format('kmm')
  );
  let blockID = 3;
  if (time >= 530 && time < 1500) {
    blockID = 0;
  } else if (time >= 1500 && time < 1850) {
    blockID = 1;
  } else if (time >= 1850 && time < 1930) {
    blockID = 2;
  }
  const block = ['morning', 'afternoon', 'night', 'sleep'];
  res.json({
    colorID: colorID,
    color: colors[colorID],
    blockID: blockID,
    block: block[blockID],
    now: now,
    time
  });
});

// @route     GET api/tweets
// @desc      get tweets
// @access    Public
router.get('/ssj', (req, res) => {
  Tweet.find()
    .sort({ user: 1 })
    .then(tweets => {
      // console.log('hmm');
      let users = [...tweets];
      let finder = [];
      users.forEach(user => {
        let newUser = JSON.parse(JSON.stringify(user));
        newUser.tasks = []; // rest tasks to only show new
        newUser.allTasks = user.tasks;
        newUser.lateTasks = 0;
        newUser.overTasks = 0;

        user.tasks.forEach(task => {
          let newTask = JSON.parse(JSON.stringify(task));
          // console.log(newTask);

          // let newTask = JSON.parse(JSON.stringify(task));
          newTask.hugs = task.timeSent.getTime();
          newTask.current = Date.now();
          newTask.diff = Date.now() - task.timeSent.getTime();
          // console.log(newTask.userID + ' ' + newTask.diff);
          if (
            !task.completed && // not completed
            newTask.userID == req.params.id && // owners of task
            newTask.diff < 50400000 // 14 hour difference
          ) {
            newUser.tasks.push(newTask);
            if (newTask.diff > 1800000) {
              // 30 minutes is late
              newUser.lateTasks++;
            }
            if (newTask.diff > 3600000) {
              // 1 hour is overdue
              newUser.overTasks++;
            }
          }
        });

        newUser.currentTasks = newUser.tasks.length;

        // add user to all list
        finder.push(newUser);
      });
      res.json(finder);
    })
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

// ********* tasks
// @route     POST api/tokens/tasks
// @desc      create new task
// @access    Public
router.post('/task/:id', (req, res) => {
  Tweet.findOne({ user: req.params.id }).then(profile => {
    const newTask = {
      title: req.body.title,
      blockID: req.body.block
    };

    // Add to edu array
    profile.tasks.push(newTask);

    profile.save().then(profile => res.json(profile));
  });
});

// @route     GET api/cat/:id
// @desc      get tasks
// @access    Public
router.get('/cat/:id', (req, res) => {
  Tweet.find()
    .sort({ user: 1 })
    .then(tweets => {
      let tasks = [];
      let newTweets = [...tweets];
      newTweets.forEach(tweet => {
        tweet.tasks.forEach(task => {
          let newTask = JSON.parse(JSON.stringify(task));

          newTask.diff = Date.now() - task.timeSent.getTime();

          newTask.userID = tweet.user;
          if (
            // !task.completed &&
            req.params.id == task.blockID &&
            newTask.diff < 3600000
          ) {
            tasks.push(newTask);
          }
        });
      });
      res.json(tasks);
    })
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

// @route     GET api/tokens/tasks
// @desc      get tasks
// @access    Public
router.get('/tasks', (req, res) => {
  Tweet.find()
    .sort({ user: 1 })
    .then(tweets => {
      let tasks = [];
      let newTweets = [...tweets];
      newTweets.forEach(tweet => {
        tweet.tasks.forEach(task => {
          let newTask = JSON.parse(JSON.stringify(task));
          newTask.userID = tweet.user;
          if (!task.completed) {
            tasks.push(newTask);
          }
        });
      });
      const temp = 0;
      res.json(tasks);
    })
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

// @route     GET api/tokens/tasks
// @desc      get tasks
// @access    Public
router.get('/tasks/:id', (req, res) => {
  Tweet.find()
    .sort({ user: 1 })
    .then(tweets => {
      let tasks = [];
      let newTweets = [...tweets];
      let lateTasks = 0;
      let overTasks = 0;
      newTweets.forEach(tweet => {
        tweet.tasks.forEach(task => {
          let newTask = JSON.parse(JSON.stringify(task));
          newTask.userID = tweet.user;
          newTask.hugs = task.timeSent.getTime();
          newTask.current = Date.now();
          newTask.diff = Date.now() - task.timeSent.getTime();
          // console.log(newTask.userID + ' ' + newTask.diff);
          if (
            !task.completed && // not completed
            newTask.userID == req.params.id && // owners of task
            newTask.diff < 50400000 // 14 hour difference
          ) {
            tasks.push(newTask);

            if (newTask.diff > 60000) {
              // 30 minutes is late
              lateTasks++;
            }

            if (newTask.diff > 120000) {
              // 1 hour is overdue
              overTasks++;
            }
          }
        });
      });
      res.json({ lateTasks, overTasks, tasks });
    })
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

// TRUEIFY
// @route     GET api/tokens/tasks
// @desc      get tasks
// @access    Public
// @route     GET api/cat/:id
// @desc      get tasks
// @access    Public
router.get('/cat/:id/true', (req, res) => {
  Tweet.find()
    .sort({ user: 1 })
    .then(tweets => {
      let tasks = [];
      let newTweets = [...tweets];
      newTweets.forEach(tweet => {
        tweet.tasks.forEach(task => {
          let newTask = JSON.parse(JSON.stringify(task));

          newTask.diff = Date.now() - task.timeSent.getTime();

          newTask.userID = tweet.user;
          if (
            !task.completed &&
            req.params.id == task.blockID &&
            newTask.diff < 3600000
          ) {
            tasks.push(newTask);
          }
        });
      });
      res.json(tasks);
    })
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
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

// UPDATE TO COMPLETE TASK
// @route     PUT api/tweets
// @desc      create tweet
// @access    Public
router.post('/complete/:id/:task_id', (req, res) => {
  Tweet.findOne({ user: req.params.id })
    .then(user => {
      // Get index
      const INDEX = user.tasks
        .map(item => item._id.toString())
        .indexOf(req.params.task_id);

      const task = user.tasks[INDEX];
      task.completed = true;

      if (INDEX >= 0) {
        // update task to completed
        user.tasks[INDEX].completed = true;
        user.save().then(user => res.json(user));
      } else {
        res.json({ tasknotfound: 'task not found' });
      }
    })
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));

  //   newTweet.save().then(tweet => res.json(tweet));
});

module.exports = router;
