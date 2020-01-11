import React, { Component } from 'react';
import axios from 'axios';
import Pop from './Pop';

class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const url = 'https://safe-anchorage-33083.herokuapp.com';
    const code = 8;
    // get tasks
    axios.get(url + '/api/tokens/cat/' + code).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data.amount);
    });
  }

  submitTask = x => {
    const url = 'https://safe-anchorage-33083.herokuapp.com';
    axios.post(url + '/api/tokens/complete/' + x).then(res => {
      const url = 'https://safe-anchorage-33083.herokuapp.com';
      const code = 8;
      // get tasks
      axios.get(url + '/api/tokens/cat/' + code).then(res => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
    });
    console.log('hello world');
  };

  render() {
    const tasker = this.state.data;

    const tasks = tasker.map(task => (
      <Pop
        key={task._id}
        onClick={() => this.submitTask(task.userID + '/' + task._id)}
        name="Morning"
        data={task}
      />
    ));

    return <div class="row">{tasks}</div>;
  }
}

export default Tasks;
