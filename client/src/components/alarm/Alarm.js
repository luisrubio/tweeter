import React, { Component } from 'react';
import axios from 'axios';

import bellAudio from './sounds/bell.mp3';
import busAudio from './sounds/bus.mp3';
import joseFeedAudio from './sounds/jose_feed.mp3';
import juanFeedAudio from './sounds/juan_feed.mp3';
import joseWalkAudio from './sounds/jose_walk.mp3';
import juanWalkAudio from './sounds/juan_walk.mp3';
import joseBinAudio from './sounds/jose_bin.mp3';
import juanBinAudio from './sounds/juan_bin.mp3';
import alfredoBinAudio from './sounds/alfredo_bin.mp3';
import jackelineBinAudio from './sounds/jackeline_bin.mp3';
import audio1 from './sounds/1.mp3';
import audio2 from './sounds/2.mp3';
import audio3 from './sounds/3.mp3';
import audio4 from './sounds/4.mp3';
import audio5 from './sounds/5.mp3';
import audio6 from './sounds/6.mp3';
import audio7 from './sounds/7.mp3';
import audio8 from './sounds/8.mp3';
import audio9 from './sounds/9.mp3';
import audio10 from './sounds/10.mp3';
import audio11 from './sounds/11.mp3';
import audio12 from './sounds/12.mp3';
import japancakes from './sounds/japancakes.mp3';
import overdueAndrea from './sounds/overdue_andrea.mp3';
import overdueAlfredo from './sounds/overdue_alfredo_2.mp3';
import overdueJose from './sounds/overdue_jose.mp3';
import overdueJuan from './sounds/overdue_juan.mp3';
import overdueJackeline from './sounds/overdue_jackeline.mp3';
import bagAudio from './sounds/trashbags.mp3';
import sanpo from './sounds/sanpo.mp3';
class Alarm extends Component {
  constructor() {
    super();
    this.state = {
      info: {},
      users: [],
      time: new Date(),
      clockCode: 0,
      alarmBells: false,
      alarmBus1: false,
      catFeed: [],
      catWalk: [],
      catBus: [],
      catTrash: [],
      catMorning: [],
      catChores: [],
      catBefore: [],
      catReading: [],
      catShower: [],
      catBag: [],
      buffer: 0
    };
  }
  componentDidMount() {
    this.fetch();

    setInterval(() => {
      this.alarm();
      this.taskMaster();
    }, 1000);
  }

  fetch = () => {
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
    axios.get(url + '/api/tokens/cat/7/true').then(res => {
      this.setState({ catBus: res.data });
    });

    // get dog feed info
    axios.get(url + '/api/tokens/cat/4/true').then(res => {
      this.setState({ catFeed: res.data });
    });

    // get dog walk info
    axios.get(url + '/api/tokens/cat/5/true').then(res => {
      this.setState({ catWalk: res.data });
    });

    // get trash info
    axios.get(url + '/api/tokens/cat/6/true').then(res => {
      this.setState({ catTrash: res.data });
    });

    // get morning info
    axios.get(url + '/api/tokens/cat/1/true').then(res => {
      this.setState({ catMorning: res.data });
    });

    // get chores info
    axios.get(url + '/api/tokens/cat/0/true').then(res => {
      this.setState({ catChores: res.data });
    });

    // get chores info
    axios.get(url + '/api/tokens/cat/2/true').then(res => {
      this.setState({ catBefore: res.data });
    });

    // get chores info
    axios.get(url + '/api/tokens/cat/9/true').then(res => {
      this.setState({ catReading: res.data });
    });
    // get shower info
    axios.get(url + '/api/tokens/cat/3/true').then(res => {
      this.setState({ catShower: res.data });
    });

    // get bags info
    axios.get(url + '/api/tokens/cat/10/true').then(res => {
      this.setState({ catBag: res.data });
    });
  };
  alarm = () => {
    this.fetch();

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

    // Sound control
    this.soundControl(parseInt(this.state.clockCode));
  };

  soundControl = n => {
    let buffer = false;
    if (18000 < Date.now() - this.state.buffer) {
      buffer = true;
    }

    // console.log(this.state.catWalk[0].timeSent);

    const color = this.state.info.colorID;
    // 0-Alfredo 1-Jackeline 2-Jose 3-Juan

    // 0 Juan - Feed ___ 1 Jose - Feed
    const doggyPEEP = [0, 1, 0, 1];
    const doggyID = doggyPEEP[color];

    console.log(doggyID);

    // 6:50 AM -- class begins
    if (n === 65000) {
      const audio = new Audio(japancakes);
      audio.play();
      console.log('playing sound');
      this.setState({ buffer: Date.now() });
      console.log('1 playing');
    }

    if (n === 65505) {
      const audio = new Audio(sanpo);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 7:50 AM -- morning bell
    if (n >= 75000 && n <= 75030 && !this.state.alarmBells) {
      const audio = new Audio(bellAudio);
      audio.play();
      console.log('playing sound');
      this.setState({ alarmBells: true });
      this.setState({ buffer: Date.now() });
      console.log('2 playing');
    }

    //  1 o'clock
    else if (n === 130000) {
      const audio = new Audio(audio1);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 2 o'clock
    else if (n === 140000) {
      const audio = new Audio(audio2);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 3 o'clock
    else if (n === 150000) {
      const audio = new Audio(audio3);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 4 o'clock
    else if (n === 160000) {
      const audio = new Audio(audio4);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 5 o'clock
    else if (n === 170000) {
      const audio = new Audio(audio5);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 6 o'clock
    else if (n === 180000) {
      const audio = new Audio(audio6);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 7 o'clock
    else if (n === 190000) {
      const audio = new Audio(audio7);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 8 o'clock
    else if (n === 80000) {
      const audio = new Audio(audio8);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 9 o'clock
    else if (n === 90000) {
      const audio = new Audio(audio9);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 10 o'clock
    else if (n === 100000) {
      const audio = new Audio(audio10);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 12 o'clock
    else if (n === 120000) {
      const audio = new Audio(audio12);
      audio.play();
      this.setState({ buffer: Date.now() });
    }

    // 11:00AM -- school bell
    else if (n >= 110000 && n <= 110030 && !this.state.alarmBus1) {
      const audio = new Audio(bellAudio);
      audio.play();
      console.log('playing sound');
      this.setState({ alarmBus1: true });
    }

    // REMINDER: bus
    else if (this.state.catBus.length > 0 && buffer) {
      const audio = new Audio(busAudio);
      audio.play();
      console.log('playing sound');
      this.setState({ buffer: Date.now() });
      console.log('3 playing');
    }

    // REMINDER: trash curb
    else if (this.state.catTrash.length > 0 && buffer) {
      console.log('4 playing');
      if (this.state.catTrash[0].diff > 900000) {
        let audio;

        const user = this.state.catTrash[0].userID;

        if (user === 1) {
          audio = new Audio(jackelineBinAudio);
        } else if (user === 2) {
          audio = new Audio(alfredoBinAudio);
        } else if (user === 3) {
          audio = new Audio(joseBinAudio);
        } else if (user === 4) {
          audio = new Audio(juanBinAudio);
        }

        audio.play();
        console.log('playing sound');
        this.setState({ buffer: Date.now() });
      }
    }
    // REMINDER: feed
    else if (this.state.catFeed.length > 0 && buffer) {
      console.log('5 playing');
      if (this.state.catFeed[0].diff > 900000) {
        let audio;

        const user = this.state.catFeed[0].userID;
        if (user === 3) {
          audio = new Audio(joseFeedAudio);
        } else if (user === 4) {
          audio = new Audio(juanFeedAudio);
        }
        audio.play();
        console.log('playing sound');
        this.setState({ buffer: Date.now() });
      }
    }
    // REMINDER: walk
    else if (this.state.catWalk.length > 0 && buffer) {
      console.log('6 playing');
      if (this.state.catWalk[0].diff > 900000) {
        let audio;

        const user = this.state.catWalk[0].userID;
        if (user === 3) {
          audio = new Audio(joseWalkAudio);
        } else if (user === 4) {
          audio = new Audio(juanWalkAudio);
        }

        audio.play();
        console.log('playing sound');
        this.setState({ buffer: Date.now() });
      }
    }
    // REMINDER: trashbag
    else if (this.state.catBag.length > 0 && buffer) {
      console.log('7 playing');
      if (this.state.catBag[0].diff > 900000) {
        let audio = new Audio(bagAudio);
        audio.play();
        console.log('playing sound');
        this.setState({ buffer: Date.now() });
      }
    }

    /*
    ==========================================================
    ============= NUDGER START ===============================
    ==========================================================
    */

    // NUDGE chores
    else if (this.state.catChores.length > 0 && buffer) {
      console.log('is it nudging?');
      if (this.state.catChores[0].diff > 1800000) {
        const sounds = [
          overdueAndrea,
          overdueJackeline,
          overdueAlfredo,
          overdueJose,
          overdueJuan
        ];
        const audio = new Audio(sounds[this.state.catChores[0].userID]);
        audio.play();
        if (this.state.catChores[0].userID === 2) {
          this.setState({ buffer: Date.now() - 5000 });
        } else {
          this.setState({ buffer: Date.now() });
        }
      }
    }

    // NUDGE morning
    else if (this.state.catMorning.length > 0 && buffer) {
      console.log('8 playing');
      if (this.state.catMorning[0].diff > 1800000) {
        const sounds = [
          overdueAndrea,
          overdueJackeline,
          overdueAlfredo,
          overdueJose,
          overdueJuan
        ];
        const audio = new Audio(sounds[this.state.catMorning[0].userID]);
        audio.play();
        this.setState({ buffer: Date.now() });
      }
    }

    // NUDGE before
    else if (this.state.catBefore.length > 0 && buffer) {
      console.log('9 playing' + this.state.catBefore[0].diff);
      if (this.state.catBefore[0].diff > 180000) {
        const sounds = [
          overdueAndrea,
          overdueJackeline,
          overdueAlfredo,
          overdueJose,
          overdueJuan
        ];
        const audio = new Audio(sounds[this.state.catBefore[0].userID]);
        audio.play();
        this.setState({ buffer: Date.now() });
        console.log('actually playing');
      }
    }

    // NUDGE reading
    else if (this.state.catReading.length > 0 && buffer) {
      console.log('10 playing');

      if (this.state.catReading[0].diff > 1800000) {
        const sounds = [
          overdueAndrea,
          overdueJackeline,
          overdueAlfredo,
          overdueJose,
          overdueJuan
        ];
        const audio = new Audio(sounds[this.state.catReading[0].userID]);
        audio.play();
        this.setState({ buffer: Date.now() });
      }
    }

    // NUDGE shower
    else if (this.state.catShower.length > 0 && buffer) {
      console.log('11 playing');

      if (this.state.catShower[0].diff > 1800000) {
        const sounds = [
          overdueAndrea,
          overdueJackeline,
          overdueAlfredo,
          overdueJose,
          overdueJuan
        ];
        const audio = new Audio(sounds[this.state.catShower[0].userID]);
        audio.play();
        this.setState({ buffer: Date.now() });
      } else {
        console.log(
          this.state.catShower[0].diff + ' ' + this.state.catShower[0].userID
        );
      }
    }

    /*
    ==========================================================
    ============= NUDGER END =================================
    ==========================================================
    */
  };

  taskMaster = n => {
    console.log('taskmaster');
  };

  render() {
    return <div></div>;
  }
}

export default Alarm;
