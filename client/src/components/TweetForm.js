import React from "react";
import Pulse from "react-reveal/Pulse";

const TweetForm = props => {
  return (
    <Pulse>
      <div className="columns">
        <div className="column">
          <form onSubmit={props.onSubmit}>
            <div className="field">
              <div className="control">
                <textarea
                  name="tweet"
                  value={props.value}
                  onChange={props.onChange}
                  className="textarea is-info"
                  placeholder="What's happening?"
                />
              </div>
            </div>
            <div className="has-text-right">
              <button className="button is-info">Tweet</button>
            </div>
          </form>
        </div>
      </div>
    </Pulse>
  );
};

export default TweetForm;
