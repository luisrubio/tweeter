import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import TweetForm from "./components/TweetForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TweetForm />
      </div>
    );
  }
}

export default App;
