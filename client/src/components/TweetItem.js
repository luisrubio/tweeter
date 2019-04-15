import React from 'react';
import Flip from 'react-reveal/Flip';
import moment from 'moment';

const TweetItem = props => {
  return (
    <Flip bottom>
      <div className="item">
        <div className="v-align">
          <img className="avatar" src={props.post.avatar} width="30" alt="" />{' '}
          {props.post.name}{' '}
          <span className="handle-text">@{props.post.handle}</span>
        </div>

        <div className="message-box">
          <h3>{props.post.tweet}</h3>
        </div>

        <div className="columns is-mobile tweet-info">
          <div className="column is-mobile">
            {/* <i className="far fa-comment-alt" /> {props.post.comments.length}{' '} */}
            <button
              onClick={props.onClick(props.post._id)}
              className="like-post"
            >
              <i className="fas fa-heart" /> {props.post.likes.length}{' '}
            </button>
          </div>
          <div className="column is-mobile has-text-right">
            {moment(props.post.date).format('h:mm A - ll')}
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default TweetItem;
