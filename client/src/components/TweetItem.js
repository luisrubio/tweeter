import React from "react";

const TweetItem = props => {
  return (
    <div className="item">
      <div class="v-align">
        <img
          src="https://vanillicon.com/v2/1f48183467719c8b709469bd0af588ff.svg"
          width="30"
          alt=""
        />{" "}
        {props.post.author}{" "}
        <span className="handle-text">@{props.post.handle}</span>
      </div>

      <div className="message-box">
        <h3>{props.post.text}</h3>
      </div>

      <div class="columns tweet-info">
        <div class="column">
          <i class="far fa-comment-alt" /> 2 <i class="far fa-heart" /> 4
        </div>
        <div class="column has-text-right">{props.post.created_at}</div>
      </div>
    </div>
  );
};

export default TweetItem;
