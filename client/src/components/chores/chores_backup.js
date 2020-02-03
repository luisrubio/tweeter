import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Redirect from '../common/Redirect';

class Chores extends Component {
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
      console.log(this.state.info);
    });
  }

  render() {
    const color = this.state.info.colorID;
    let taskJuan = 'Feed dog';
    let taskJose = 'Walk dog / clean cage';
    if (color === 1 || color === 3) {
      taskJuan = 'Walk dog / Clean cage';
      taskJose = 'Feed dog';
    }
    const taskA = (
      <div>
        <div>- Wash dishes</div>
        <div>- Wipe dining/kitchen table</div>
        <div>- Wipe living room counters</div>
      </div>
    );

    const taskB = (
      <div>
        <div>- Tidy porch</div>
        <div>- Sweep porch & Stairs</div>
        <div>- Pick up trash from yard</div>
      </div>
    );

    const taskC = (
      <div>
        <div>- Tidy bathroom sink counter</div>
        <div>- Clean toilet</div>
        <div>- Windex bathroom mirror</div>
      </div>
    );

    const taskD = (
      <div>
        <div>- Take out kitchen trash</div>
        <div>- Take out bathroom trash</div>
        <div>- Tidy living room</div>
        <div>- Set bin to the front (mon/thu)</div>
      </div>
    );

    const alfredoTask = [taskA, taskD, taskC, taskB];
    const juanTask = [taskD, taskC, taskB, taskA];
    const joseTask = [taskC, taskB, taskA, taskD];
    const jackelineTask = [taskB, taskA, taskD, taskC];

    return (
      <div className="container-fluid">
        <div className="row mm">
          <div className="col-2">
            <Link to="/">
              <div className="tile-sm">
                <div>Home</div>
                <div className="tile-icon p-1">
                  <i className="fas fa-home op"></i>
                </div>
                <div></div>
              </div>
            </Link>
          </div>
          <div className="col-2">
            <div className={'tile-sm ' + this.state.info.color}>
              <div>week {this.state.info.color}</div>
              <div className="text-icon p-1">
                <i class="fas fa-tint"></i>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-10"></div>
          <div className="col-12 text-left">
            <div className="tiltle">Blocks</div>
          </div>
          <div className="col-3">
            <div className="tile double">
              <h2>Morning</h2>
              <div className="text-left">
                <div>- Prayer</div>
                <div>- Make bed</div>
                <div>- Morning task</div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="tile double">
              <h2>Afterschool</h2>
              <div className="text-left">
                <div>- Park bike</div>
                <div>- Place backpack</div>
                <div>- Put shoes in closet</div>
                <div>- Clean after yourself</div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="tile double">
              <h2>Before play</h2>
              <div className="text-left">
                <div>- Shower/Brush teeth</div>
                <div>- Set clothes for next day</div>
                <div>- Tidy room</div>
                <div>- Place water bottle in designated area</div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="tile double dva">
              <div className="pinku">
                <h2>Andrea</h2>
                <div className="text-left">
                  <div>- Hacer trabajo del papel</div>
                  <div>- Limpiar y ordenar la sala</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-left">
            <div className="tiltle">Assigned Chores</div>
          </div>
          <div className="col-3">
            <div className="tile double">
              <h2>Alfredo</h2>
              <div className="text-left">
                <div>- Sweep floors</div>
                <div>- Mop floors (bi-weekly)</div>
                {alfredoTask[color]}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="tile double">
              <h2>Juan</h2>
              <div className="text-left">
                <div>- {taskJuan}</div>
                {juanTask[color]}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="tile double">
              <h2>Jose</h2>
              <div className="text-left">
                <div>- {taskJose}</div>
                {joseTask[color]}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="tile double">
              <h2>Jackeline</h2>
              <div className="text-left">{jackelineTask[color]}</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Redirect />
        </div>
      </div>
    );
  }
}

export default Chores;
