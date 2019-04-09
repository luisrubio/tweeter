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
          created_at: 1554620855205,
          handle: "Jacob_Smith"
        },
        {
          text: "Tweet tweet tweet",
          author: "Jacki Chan",
          created_at: 1554620855205,
          handle: "jackiechan"
        }
      ]
    };
  }
  render() {
    return this.state.posts.map(post => <TweetItem post={post} />);
  }
}

export default TweetFeed;
