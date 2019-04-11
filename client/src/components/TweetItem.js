import React from "react";
import Flip from "react-reveal/Flip";

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
    <Flip bottom>
      <div className="item">
        <div className="v-align">
          <img className="avatar" src={props.post.avatar} width="30" alt="" />{" "}
          {props.post.name}{" "}
          <span className="handle-text">@{props.post.handle}</span>
        </div>

        <div className="message-box">
          <h3>{props.post.tweet}</h3>
        </div>

        <div className="columns tweet-info">
          <div className="column">
            <i className="far fa-comment-alt" /> {props.post.comments.length}{" "}
            <i
              onClick={props.onClick(props.post._id)}
              className="far fa-heart"
            />{" "}
            {props.post.likes.length}
          </div>
          <div className="column has-text-right">{date}</div>
        </div>
      </div>
    </Flip>
  );
};

export default TweetItem;
