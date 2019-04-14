import React from "react";
import TweetItem from "./TweetItem";
import Spinner from "./common/Spinner.js";

const TweetFeed = props => {
  if (props.loading) {
    return <Spinner />;
  } else {
    return props.posts.map(post => (
      <TweetItem key={post._id} post={post} onClick={props.onClick} />
    ));
  }
};

export default TweetFeed;
