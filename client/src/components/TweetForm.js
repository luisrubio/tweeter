import React, { Component } from "react";
import Pulse from "react-reveal/Pulse";

class TweetForm extends Component {
  render() {
    return (
      <div className="container">
        <Pulse>
          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea is-info"
                    placeholder="What's happening?"
                  />
                </div>
              </div>
              <div className="has-text-right">
                <a href="/" className="button is-info">
                  Tweet
                </a>
              </div>
            </div>
          </div>
        </Pulse>
      </div>
    );
  }
}

export default TweetForm;
