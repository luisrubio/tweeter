import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Pop from './ModalPop';
import Redirect from '../common/Redirect';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const url = '';
    console.log(this.props.match.params.id);
    const code = this.props.match.params.id;
    // get bus info
    axios.get(url + '/api/tokens/cat/' + code).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  submitTask = x => {
    const url = '';
    axios.post(url + '/api/tokens/complete/' + x).then(res => {
      console.log(x);
      this.props.history.push('/');
    });
  };

  render() {
    const tasker = this.state.data;
    const users = [
      'Andrea',
      'Jackeline',
      'Alfredo',
      'Manuel',
      'Juan',
      'Anyone'
    ];
    const tasks = tasker.map(task => (
      <Pop
        key={task._id}
        onClick={() => this.submitTask(task.userID + '/' + task._id)}
        name={users[task.userID]}
        data={task}
      />
    ));
    return (
      <div>
        <Link to="/">
          <div className="sm-icon">
            <div>Home</div>
            <i className="fas fa-home"></i>
          </div>
        </Link>
        <div className="row pl-3 pr-1">{tasks}</div>
        <Redirect />
      </div>
    );
  }
}

export default Modal;
