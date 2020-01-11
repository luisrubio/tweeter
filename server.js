const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const tweets = require('./routes/api/tweets');
const tokens = require('./routes/api/tokens');
const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// body parser middle
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.log(err);
  });

app.use('/api/tweets', tweets);
app.use('/api/tokens', tokens);

// static assets
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const taskmaster = () => {
  axios
    .get('https://safe-anchorage-33083.herokuapp.com/api/tokens/info')
    .then(function(response) {
      // handle success
      console.log(response.data.color);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

// taskmaster();
// setInterval(() => {
//   taskmaster();
// }, 1000);

app.listen(port, () => console.log(`Tweeter App listening on port ${port}!`));
