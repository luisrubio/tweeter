import React from "react";

const TweetItem = props => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const d = new Date(props.post.date);
  const date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  return (
    <div className="item">
      <div className="v-align">
        <img src={props.post.avatar} width="30" alt="" /> {props.post.name}{" "}
        <span className="handle-text">@{props.post.handle}</span>
      </div>

      <div className="message-box">
        <h3>{props.post.tweet}</h3>
      </div>

      <div className="columns tweet-info">
        <div className="column">
          <i className="far fa-comment-alt" /> {props.post.likes.length}{" "}
          <i className="far fa-heart" /> {props.post.comments.length}
        </div>
        <div className="column has-text-right">{date}</div>
      </div>
    </div>
  );
};

export default TweetItem;
