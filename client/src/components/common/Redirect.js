import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Redirect extends Component {
  constructor() {
    super();
    this.state = {
      timer: 20
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  update = () => {
    if (this.state.timer < 2) {
      this.props.history.push('/');
      console.log('redirecting');
    } else {
      const timer = this.state.timer - 1;
      this.setState({ timer });
    }
  };
  render() {
    return <div class="redirect">{this.state.timer}</div>;
  }
}

export default withRouter(Redirect);
