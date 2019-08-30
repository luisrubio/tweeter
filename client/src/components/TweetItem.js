import React from 'react';
import moment from 'moment';

const TweetItem = props => {
  const names = ['Juan', 'Manuel', 'Paola'];
  const status = ['-', '+'];
  return (
    <tr className="item">
      <td>{names[props.post.name]}</td>
      <td>
        {status[props.post.handle]}
        {props.post.avatar}
      </td>
      <td>{props.post.tweet}</td>
      <td>{moment(props.post.date).format('h:mm A - ll')}</td>
      <td>
        <a href="#">x</a>
      </td>
    </tr>
  );
};

export default TweetItem;
