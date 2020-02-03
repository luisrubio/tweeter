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
import Basic from './components/Basic';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: 'pencil',
        time: new Date(),
        week: 0,
        weekColor: 'loading'
      },
      time: new Date(),
      clockCode: 0,
      sleep: 0
    };
  }

  componentDidMount() {
    this.update();
    setInterval(this.update, 1000);
  }

  update = () => {
    Date.prototype.getWeek = function() {
      var date = new Date(this.getTime());
      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return (
        1 +
        Math.round(
          ((date.getTime() - week1.getTime()) / 86400000 -
            3 +
            ((week1.getDay() + 6) % 7)) /
            7
        )
      );
    };

    const colors = ['purple', 'red', 'blue', 'green'];
    const weekCode = (this.state.info.time.getWeek() - 1) % 4;

    const weekColor = colors[weekCode];

    const addZero = i => {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    };
    const clockCode =
      addZero(this.state.time.getHours()) +
      '' +
      addZero(this.state.time.getMinutes()) +
      '' +
      addZero(this.state.time.getSeconds());

    const newInfo = {
      name: 'pencil',
      time: new Date(),
      week: weekCode,
      weekColor: weekColor
    };

    let sleep = 1;

    if ((clockCode > 60000) & (clockCode < 195500)) {
      sleep = 0;
    }
    this.setState({
      info: newInfo,
      clockCode,
      time: new Date(),
      sleep
    });
  };
  render() {
    let actionTile;
    if (this.state.sleep === 1) {
      // sleep
      actionTile = <Basic />;
    } else {
      actionTile = <Home info={this.state.info} />;
    }
    return (
      <div>
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

            <Route path="/">{actionTile}</Route>
          </Switch>
          <Alarm />
        </Router>
      </div>
    );
  }
}

export default App;
