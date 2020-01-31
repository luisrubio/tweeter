import React, { Component } from 'react';
import axios from 'axios';

class Charts extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const url = '';
    const code = 8;
    // get tasks
    axios.get(url + '/api/tokens/catbat/' + code).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }
  render() {
    return (
      <div>
        <h4>Morning Tasks</h4>

        <div>
          <button className="btn btn-yes">
            <div className="head">NOV</div>
            <div className="bold">2</div>
          </button>

          <button className="btn btn-yes">
            <div className="head">NOV</div>
            <div className="bold">3</div>
          </button>

          <button className="btn btn-no">
            <div className="head">NOV</div>
            <div className="bold">4</div>
          </button>

          <button className="btn btn-yes">
            <div className="head">NOV</div>
            <div className="bold">5</div>
          </button>

          <button className="btn btn-yes">
            <div className="head">NOV</div>
            <div className="bold">6</div>
          </button>

          <button className="btn btn-gry">
            <div className="head">NOV</div>
            <div className="bold">7</div>
          </button>
        </div>
      </div>
    );
  }
}

export default Charts;
