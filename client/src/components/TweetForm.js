import React from 'react';
import Pulse from 'react-reveal/Pulse';

const TweetForm = props => {
  return (
    <div className="columns pt-4 pb-4">
      <div className="column">
        <form onSubmit={props.onSubmit}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                name="tweet"
                value={props.value}
                onChange={props.onChange}
                className="textarea is-info"
                placeholder="なんだ"
              />
              <input
                amount={props.amount}
                onChange={props.onChange}
                type="number"
                name="amount"
                placeholder="量"
              />
              <input
                amount={props.status}
                onChange={props.onChange}
                type="number"
                name="status"
                placeholder="格"
              />
              <input
                amount={props.name}
                onChange={props.onChange}
                type="number"
                name="name"
                placeholder="名"
              />
              <button className="button is-info2">提出する</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetForm;
