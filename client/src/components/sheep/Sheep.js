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
    this.update();
    this.interval = setInterval(this.update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  update = () => {
    const url = '';
    // get users stats
    axios.get(url + '/api/tokens/counter').then(res => {
      this.setState({ counter: res.data.amount });
    });
  };
  render() {
    let n = this.state.counter;
    let lifebar;
    if (n === 0) {
      lifebar = (
        <div className="col-md-12">
          <button className="life"></button>
          <button className="life"></button>
          <button className="life"></button>
          <button className="life"></button>
          <button className="life"></button>
        </div>
      );
    } else if (n === 1) {
      lifebar = (
        <div className="col-md-12">
          <button className="life col-red"></button>
          <button className="life"></button>
          <button className="life"></button>
          <button className="life"></button>
          <button className="life"></button>
        </div>
      );
    } else if (n === 2) {
      lifebar = (
        <div className="col-md-12">
          <button className="life col-orange"></button>
          <button className="life col-orange"></button>
          <button className="life"></button>
          <button className="life"></button>
          <button className="life"></button>
        </div>
      );
    } else if (n === 3) {
      lifebar = (
        <div className="col-md-12">
          <button className="life col-yellow"></button>
          <button className="life col-yellow"></button>
          <button className="life col-yellow"></button>
          <button className="life"></button>
          <button className="life"></button>
        </div>
      );
    } else if (n === 4) {
      lifebar = (
        <div className="col-md-12">
          <button className="life col-green"></button>
          <button className="life col-green"></button>
          <button className="life col-green"></button>
          <button className="life col-green"></button>
          <button className="life"></button>
        </div>
      );
    } else if (n >= 5) {
      lifebar = (
        <div className="col-md-12">
          <button className="life col-perfect"></button>
          <button className="life col-perfect"></button>
          <button className="life col-perfect"></button>
          <button className="life col-perfect"></button>
          <button className="life col-perfect"></button>
        </div>
      );
    }
    return (
      <div className="sheep pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8b59154-c192-4417-888b-f9731b36ae89/daxnkcx-3db57900-9d17-4f68-8323-4bfd7031fc3b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4YjU5MTU0LWMxOTItNDQxNy04ODhiLWY5NzMxYjM2YWU4OVwvZGF4bmtjeC0zZGI1NzkwMC05ZDE3LTRmNjgtODMyMy00YmZkNzAzMWZjM2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.W3zjrny0ezsx5e-uGiQcLQKfQbgHFp-MQqGdzqWM-4g"
                alt=""
                className="img-fluid"
                width="400px"
              />
            </div>
            {/* {lifebar} */}
          </div>
        </div>
      </div>
    );
  }
}
export default Sheep;
