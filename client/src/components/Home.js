import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Tile from './tiles/Tile';
import SolidTile from './tiles/SolidTile';
import SolidTileImg from './tiles/SolidTileImg';
import DynamicTile from './tiles/DynamicTile';

import Clock from './tiles/Clock';
import Weather from './tiles/Weather';
import Emojis from './tiles/Emojis';
import Playlist from './tiles/Playlist';
import Habitica from './habitica/HabiticaTile';
import Youtube from './youtube/Youtube';
import Sheep from './sheep/Sheep';
import Infantil from './youtube/Infantil';
import Intermission from './youtube/Intermission';
import Chores from './chores/Chores';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      info: {},
      users: [],
      loading: true,
      catBus: [],
      catFeed: [],
      catWalk: [],
      catTrash: [],
      catShower: [],
      catReading: [],
      catChores: [],
      catMorning: [],
      catBefore: [],
      catBag: [],
      catMath: [],
      time: new Date(),
      clockCode: 0,
      choresDisplayTimer: 0
    };
  }

  componentDidMount() {
    this.update();
    this.interval = setInterval(this.update, 5000);
    this.timah = setInterval(this.updateTimah, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.timah);
  }

  onClickTab = () => {
    this.setState({ choresDisplayTimer: 15 });
  };

  clickHome = () => {
    this.setState({ choresDisplayTimer: 0 });
  };

  updateTimah = () => {
    const cDT = this.state.choresDisplayTimer - 1;

    this.setState({ choresDisplayTimer: cDT });
  };

  update = () => {
    // Clock code
    const addZero = i => {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    };
    const clockCode =
      addZero(this.state.time.getHours()) +
      '' +
      addZero(this.state.time.getMinutes()) +
      '' +
      addZero(this.state.time.getSeconds());
    this.setState({
      time: new Date(),
      clockCode
    });

    const url = 'https://safe-anchorage-33083.herokuapp.com';
    // get users stats
    axios.get(url + '/api/tokens/ssj').then(res => {
      this.setState({ users: res.data, loading: false });
    });

    // get general info / debug info
    axios.get(url + '/api/tokens/info').then(res => {
      this.setState({ info: res.data });
    });

    // get bus info
    axios.get(url + '/api/tokens/cat/7').then(res => {
      this.setState({ catBus: res.data });
    });

    // get feed info
    axios.get(url + '/api/tokens/cat/4').then(res => {
      this.setState({ catFeed: res.data });
    });

    // get walk info
    axios.get(url + '/api/tokens/cat/5').then(res => {
      this.setState({ catWalk: res.data });
    });

    // get trash curb info
    axios.get(url + '/api/tokens/cat/6').then(res => {
      this.setState({ catTrash: res.data });
    });

    // get trash bags info
    axios.get(url + '/api/tokens/cat/10').then(res => {
      this.setState({ catBag: res.data });
    });

    // get show info
    axios.get(url + '/api/tokens/cat/3').then(res => {
      this.setState({ catShower: res.data });
    });

    // get chores info
    axios.get(url + '/api/tokens/cat/0').then(res => {
      this.setState({ catChores: res.data });
    });

    // get morning info
    axios.get(url + '/api/tokens/cat/1').then(res => {
      this.setState({ catMorning: res.data });
    });

    // get before info
    axios.get(url + '/api/tokens/cat/2').then(res => {
      this.setState({ catBefore: res.data });
    });

    // get reading info
    axios.get(url + '/api/tokens/cat/9').then(res => {
      this.setState({ catReading: res.data });
    });

    // get khan info
    axios.get(url + '/api/tokens/cat/11').then(res => {
      this.setState({ catMath: res.data });
    });

    console.log(Date.now() + ': updating');
  };

  render() {
    // emoji
    const loading = this.state.loading;
    let sheep;
    let matutina;
    let alt = (
      <SolidTile
        data={this.state.catBus}
        top="Bus Pickup"
        icon="fas fa-bus"
        to="7"
      />
    );
    if (this.state.clockCode > 170000 && this.state.clockCode < 200000) {
      alt = (
        <DynamicTile
          data={this.state.catShower}
          top="Shower"
          bot="Complete"
          icon="fas fa-bath"
          to="3"
          progress="b-75"
        />
      );
    }

    if (this.state.clockCode > 65000 && this.state.clockCode < 65500) {
      matutina = <Youtube />;
    } else if (this.state.clockCode > 65505 && this.state.clockCode < 65538) {
      matutina = <Intermission />;
    } else if (this.state.clockCode > 65538 && this.state.clockCode < 65800) {
      matutina = <Infantil />;
    }
    if (this.state.clockCode > 195000 && this.state.clockCode < 210000) {
      sheep = <Sheep />;
    }
    if (loading) {
      return (
        <div id="container-foo">
          <div id="content-foo">Loading..</div>
        </div>
      );
    }
    let emoji;
    if (loading) {
      emoji = 'loading';
    } else {
      emoji = <Emojis info={this.state.users} />;
    }

    // chores blocks 0: morning, 1: afternoon, 2: night, 3: sleep
    const block = this.state.info.blockID;

    let tasker;
    // const block = 1;
    if (block === 1) {
      tasker = (
        <DynamicTile
          data={this.state.catChores}
          top="Chores"
          icon="fas fa-broom"
          to="0"
        />
      );
    } else if (block === 2) {
      tasker = (
        <DynamicTile
          data={this.state.catBefore}
          top="Before Play Checklist"
          icon="fas fa-leaf"
          to="2"
        />
      );
    } else if (block === 3) {
      tasker = (
        <Tile
          top="Good Night"
          bot=""
          icon="fas fa-moon op"
          to="/"
          progress=""
        />
      );
    } else {
      tasker = (
        <DynamicTile
          data={this.state.catMorning}
          top="Morning Check-In"
          icon="fas fa-coffee"
          to="1"
        />
      );
    }

    let choresBox;

    if (this.state.choresDisplayTimer > 0) {
      choresBox = (
        <div>
          <Chores info={this.props.info} onClick={this.clickHome} />
        </div>
      );
    } else {
      choresBox = '';
    }

    return (
      <div className="container-fluid">
        {choresBox}
        <div className="row">
          <Tile
            top="My Tasks"
            bot={'week ' + this.props.info.weekColor}
            icon="fas fa-list op"
            onClick={this.onClickTab}
          />
          <SolidTile
            data={this.state.catFeed}
            top="Feed Dog"
            icon="fas fa-bone"
            to="4"
          />
          <SolidTile
            data={this.state.catWalk}
            top="Walk dog"
            icon="fas fa-paw"
            to="5"
          />
          <SolidTile data="" top="" icon="" to="" />
          {/* <Weather /> */}

          <Clock />
          {tasker}
          {alt}

          <Tile top="Roku Remote" bot="" icon="fas fa-tv op" to="/remote" />

          <DynamicTile
            data={this.state.catReading}
            top="Daily Reading"
            bot="Complete"
            icon="fas fa-book-open"
            to="9"
            progress="b-75"
          />

          <SolidTile
            data={this.state.catBag}
            top="Take trash out"
            icon="fas fa-trash-alt"
            to="10"
          />

          <SolidTile
            data={this.state.catTrash}
            top="Trash 2 Curb"
            icon="fas fa-dumpster"
            to="6"
          />
          {emoji}

          <Playlist block={this.state.info.colorID} />

          {matutina}
          {sheep}
        </div>
      </div>
    );
  }
}

export default Home;
