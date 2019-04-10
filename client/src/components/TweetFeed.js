import React, { Component } from "react";
import axios from "axios";

import TweetItem from "./TweetItem";

class TweetFeed extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/tweets")
      .then(response => {
        console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return this.state.posts.map(post => (
      <TweetItem key={post._id} post={post} />
    ));
  }
}

export default TweetFeed;
