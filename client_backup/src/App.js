import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Charts from './components/Charts';
import Tasks from './components/Tasks';
import SheepController from './components/Sheep';
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          {/* <Navbar />
          <Switch>
            <Route path="/" exact>
              <Tasks />
            </Route>
            <Route path="/charts">
              <Charts />
            </Route>
          </Switch> */}
          <SheepController />
        </Router>
      </div>
    );
  }
}
