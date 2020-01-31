import React, { Component } from 'react';
import axios from 'axios';
import Youtube from '../youtube/Youtube';

class Taskmaster extends Component {
  constructor() {
    super();
    this.state = {
      info: {}
    };
  }
  componentDidMount() {
    const url = '';

    // get general info / debug info
    axios.get(url + '/api/tokens/info').then(res => {
      this.setState({ info: res.data });
    });
  }
  onClickShower = n => {
    this.giveTask(n, 3, 'shower');
    console.log('Shower tasks created.');
  };
  onClick = n => {
    // Morning
    if (n === 0) {
      this.giveTaskTrio(1, 'morning');
      this.giveTaskDog(this.state.info.colorID);
      this.giveTaskTrash(10, this.state.info.colorID);
      console.log('Morning tasks created.');
    }
    // Evening
    else if (n === 1) {
      this.giveTaskTrio(0, 'chores');
      this.giveTask(2, 0, 'chores');
      this.giveTask(0, 0, 'chores');
      this.giveTaskDog(this.state.info.colorID);
      console.log('Chores tasks created.');
    }
    // Bus
    else if (n === 2) {
      this.giveTask(5, 7, 'bus');
      console.log('Bus task created.');
    }
    // Before Play
    else if (n === 3) {
      this.giveTaskTrio(2, 'before play');
      this.giveTaskCurb();
      console.log('Before Play tasks created.');
    }
    // Reading
    else if (n === 4) {
      this.giveTask(0, 9, 'reading');
      console.log('Reading tasks created.');
    }
    // Khan Academy
    else if (n === 5) {
      this.giveTask(0, 11, 'math');
      console.log('Khan tasks created.');
    }
  };

  giveTask = (user, block, title) => {
    const url = 'https://safe-anchorage-33083.herokuapp.com';

    axios
      .post(url + '/api/tokens/task/' + user, {
        title: title,
        block: block
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  giveTaskCurb = () => {
    const d = new Date();
    const day = d.getDay();
    if (day === 1 || day === 4) {
      console.log('taking trash to curb');
      this.giveTaskTrash(6, this.state.info.colorID);
    } else {
      console.log('do nothing with trashbin');
    }
  };

  giveTaskTrash = (type, color) => {
    const url = 'https://safe-anchorage-33083.herokuapp.com';
    const names = ['4', '2', '1', '3'];
    const n = names[color];
    axios
      .post(url + '/api/tokens/task/' + n, {
        title: 'trash',
        block: type
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  giveTaskDog = n => {
    const url = 'https://safe-anchorage-33083.herokuapp.com';

    if (n === 0 || n === 2) {
      console.log(n + '?');
      axios
        .post(url + '/api/tokens/task/4', {
          title: 'feed dog',
          block: 4
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
      axios
        .post(url + '/api/tokens/task/3', {
          title: 'walk dog',
          block: 5
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    } else if (n === 1 || n === 3) {
      axios
        .post(url + '/api/tokens/task/4', {
          title: 'walk dog',
          block: 5
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
      axios
        .post(url + '/api/tokens/task/3', {
          title: 'feed dog',
          block: 4
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };

  giveTaskTrio = (n, title) => {
    const url = 'https://safe-anchorage-33083.herokuapp.com';

    // TASK: Jackeline
    axios
      .post(url + '/api/tokens/task/1', {
        title: title,
        block: n
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    // TASK: Juan
    axios
      .post(url + '/api/tokens/task/4', {
        title: 'morning',
        block: n
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    // TASK: Jose
    axios
      .post(url + '/api/tokens/task/3', {
        title: 'morning',
        block: n
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="text-center pt-3">
        {/* <div>{this.state.info.colorID}</div> */}
        <div className="p-3">
          <button
            className="btn-tm"
            onClick={() => {
              this.onClick(0);
            }}
          >
            <div>
              <i className="fas fa-coffee"></i>
            </div>
            <div>Morning Block</div>
          </button>
          <button
            className="btn-tm"
            onClick={() => {
              this.onClick(1);
            }}
          >
            <div>
              <i className="fas fa-broom"></i>
            </div>
            <div>Chores Block</div>
          </button>

          <button
            className="btn-tm"
            onClick={() => {
              this.onClick(3);
            }}
          >
            <div>
              <i className="fas fa-praying-hands"></i>{' '}
            </div>
            <div>Before Play</div>
          </button>
          <button
            className="btn-tm"
            onClick={() => {
              this.onClick(2);
            }}
          >
            <div>
              <i className="fas fa-bus"></i>
            </div>
            <div>Bus Block</div>
          </button>
        </div>

        {/* SHOWER INDIVIDUAL */}
        <div>
          <button
            className="btn-tm"
            onClick={() => {
              this.onClick(4);
            }}
          >
            <div>
              <i className="fas fa-book"></i>
            </div>
            <div>Reading</div>
          </button>
          <button
            className="btn-tm"
            onClick={() => {
              this.onClick(5);
            }}
          >
            <div>
              <i className="fas fa-calculator"></i>
            </div>
            <div>Khan Academy</div>
          </button>
        </div>
        <div className="p-3">
          <button
            className="btn-tm"
            onClick={() => {
              this.onClickShower(1);
            }}
          >
            <div>
              <i className="fas fa-shower"></i>
            </div>
            <div>Shower Block: Jackeline</div>
          </button>
          <button
            className="btn-tm"
            onClick={() => {
              this.onClickShower(3);
            }}
          >
            <div>
              <i className="fas fa-shower"></i>
            </div>
            <div>Shower Block: Manuel</div>
          </button>
          <button
            className="btn-tm"
            onClick={() => {
              this.onClickShower(4);
            }}
          >
            <div>
              <i className="fas fa-shower"></i>
            </div>
            <div>Shower Block: Juan</div>
          </button>
        </div>
        <div>{/* <Youtube /> */}</div>
      </div>
    );
  }
}

export default Taskmaster;
