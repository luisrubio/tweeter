import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TweetForm from './components/TweetForm';
import TweetFeed from './components/TweetFeed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      tweet: '',
      amount: 0,
      status: 1,
      name: 0,
      loading: true
    };
  }

  componentDidMount() {
    this.fetchTweets();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ tweet: '' });
    axios
      .post('/api/tweets', {
        tweet: this.state.tweet,
        amount: this.state.amount,
        status: this.state.status,
        name: this.state.name
      })
      .then(res => {
        console.log(res.data);
        this.fetchTweets();
      })
      .catch(err => console.log(err.response.data));
  };

  onClick = id => () => {
    const index = this.state.posts.findIndex(post => post._id === id);
    console.log(index);
    axios
      .post('/api/tweets/' + id + '/like')
      .then(res => {
        console.log(res.data);
        let posts = [...this.state.posts];
        posts[index] = res.data;
        this.setState({ posts });
      })
      .catch(err => console.log(err.response.data));
  };

  onClickTop = () => {
    window.scrollTo(0, 0);
  };

  fetchTweets = e => {
    axios
      .get('/api/tweets')
      .then(response => {
        this.setState({ posts: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <TweetForm
            value={this.state.tweet}
            status={this.state.status}
            name={this.state.name}
            amount={this.state.amount}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
          <table class="table table-sm">
            {/* <tr className="item">
              <td>Name</td>
              <td>Amount</td>
              <td>Reason</td>
              <td>Date</td>
            </tr> */}
            <TweetFeed
              posts={this.state.posts}
              loading={this.state.loading}
              onClick={this.onClick}
            />
          </table>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
