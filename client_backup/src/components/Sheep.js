import React, { Component } from 'react';
import axios from 'axios';

class Sheep extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    this.getCounter();
  }

  getCounter = () => {
    axios.get('/api/tokens/counter').then(res => {
      this.setState({ counter: res.data.amount });
      console.log(res.data.amount);
    });
  };

  down = () => {
    axios.put('/api/tokens/counterdown').then(res => {
      this.getCounter();
    });
  };

  up = () => {
    axios.put('/api/tokens/counterup').then(res => {
      this.getCounter();
    });
  };

  reset = () => {
    axios.put('/api/tokens/counterre').then(res => {
      this.getCounter();
    });
  };
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>{this.state.counter}</h1>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              this.down();
            }}
            className="btn btn-light btn-lg"
          >
            -
          </button>
          <button
            onClick={() => {
              this.up();
            }}
            className="btn btn-light btn-lg"
          >
            +
          </button>

          <div>
            <button
              onClick={() => {
                this.reset();
              }}
              className="btn btn-light btn-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sheep;
