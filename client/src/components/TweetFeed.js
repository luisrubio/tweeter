import React, { Component } from "react";
import TweetItem from "./TweetItem";

class TweetFeed extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          text: "I love tweeeter!",
          author: "Jacob Smith",
          create_at: 1554620855205,
          handle: "@Jacob_Smith"
        },
        {
          text: "I love tweeeter!",
          author: "Jacob Smith",
          create_at: 1554620855205,
          handle: "@Jacob_Smith"
        }
      ]
    };
  }
  render() {
    return this.state.posts.map(post => <TweetItem />);
  }
}

export default TweetFeed;
