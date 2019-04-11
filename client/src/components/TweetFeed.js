import React from "react";
import TweetItem from "./TweetItem";

const TweetFeed = props => {
  if (props.loading) {
    return "loading..";
  } else {
    return props.posts.map(post => (
      <TweetItem key={post._id} post={post} onClick={props.onClick} />
    ));
  }
};

export default TweetFeed;
