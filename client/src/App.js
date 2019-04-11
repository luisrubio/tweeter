import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import TweetForm from "./components/TweetForm";
import TweetFeed from "./components/TweetFeed";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      tweet: "",
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
    this.setState({ tweet: "" });
    axios
      .post("/api/tweets", { tweet: this.state.tweet })
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
      .post("/api/tweets/" + id + "/like")
      .then(res => {
        console.log(res.data);
        let posts = [...this.state.posts];
        posts[index] = res.data;
        this.setState({ posts });
      })
      .catch(err => console.log(err.response.data));
  };

  fetchTweets = e => {
    axios
      .get("/api/tweets")
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
        <div className="container">
          <TweetForm
            value={this.state.tweet}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
          <TweetFeed
            posts={this.state.posts}
            loading={this.state.loading}
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
