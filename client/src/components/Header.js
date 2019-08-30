import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      select: '5d685f7b391e4144c65cdbf6',
      amount: 0
    };
  }

  change = e => {
    this.setState({ select: e.target.value });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.select);
    console.log(this.state.amount);

    axios
      .put('/api/tokens/' + this.state.select, {
        amount: this.state.amount
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.response.data));
  };
  render() {
    return (
      <div className="container">
        <form name="select" onSubmit={this.onSubmit}>
          <select class="normal" name="name" onChange={this.change}>
            <option value="5d685f7b391e4144c65cdbf6">Juan</option>
            <option value="5d685f89391e4144c65cdbf7">Manuel</option>
            <option value="5d685f92391e4144c65cdbf8">Paola</option>
          </select>
          <input
            type="number"
            name="amount"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onChange}
          />
          <button className="button is-info2">提出する</button>
        </form>
      </div>
    );
  }
}

export default Header;
