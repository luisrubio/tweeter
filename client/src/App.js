import React, { Component } from "react";
import Pulse from "react-reveal/Pulse";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title is-1" data-aos="fade-up">
          Tweeter
        </h1>
        <Pulse>
          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Write what you want to tweet to the public!"
                  />
                </div>
              </div>
            </div>
          </div>
        </Pulse>
      </div>
    );
  }
}

export default App;
