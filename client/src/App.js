import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import TweetForm from "./components/TweetForm";
import TweetFeed from "./components/TweetFeed";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <TweetForm />
          <TweetFeed />
        </div>
      </div>
    );
  }
}

export default App;
