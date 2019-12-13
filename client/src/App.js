import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

import Button from './components/common/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          name: 'Morning Routine',
          icon: 'fa-user-astronaut',
          completed: false,
          counter: 0
        }
      ]
    };
  }

  onClick = x => {
    let tasks = this.state.tasks;
    tasks[x].counter = tasks[x].counter + 1;
    if (tasks[x].counter >= 2) {
      tasks[x].completed = true;
    }
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center pb-1">Simple Habits</h1>
        <Button
          icon="fa-user-astronaut"
          name="Morning Routine"
          completed={this.state.tasks[0].completed}
          onClick={() => this.onClick(0)}
          counter={this.state.tasks[0].counter}
        />
      </div>
    );
  }
}

export default App;
