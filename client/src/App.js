import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Chores from './components/chores/Chores';
import Remote from './components/remote/Remote';
import Habitica from './components/habitica/Habitica';
import Modal from './components/tasks/Modal';
import Alarm from './components/alarm/Alarm';
import Youtube from './components/youtube/Youtube';
import Taskmaster from './components/taskmaster/Taskmaster';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: 'pencil',
        time: new Date()
      }
    };
  }
  componentDidMount() {
    setInterval(this.update, 500);
  }
  update = () => {
    const newInfo = {
      name: 'pencil',
      time: new Date()
    };
    this.setState({
      info: newInfo
    });
  };
  render() {
    let only = this.state.info.time.getHours();
    return (
      <div>
        <div>{only}</div>
        <Router>
          <Switch>
            <Route path="/remote">
              <Remote />
            </Route>
            <Route path="/chores">
              <Chores />
            </Route>
            <Route path="/habitica">
              <Habitica />
            </Route>

            <Route path="/youtube">
              <Youtube />
            </Route>

            <Route path="/cat/:id" component={Modal} />
            <Route path="/taskmaster" component={Taskmaster} />

            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Alarm />
        </Router>
      </div>
    );
  }
}

export default App;
