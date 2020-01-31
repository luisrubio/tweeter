import React, { Component } from 'react';
class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }
  componentDidMount() {
    setInterval(this.update, 30000);
  }
  update = () => {
    this.setState({
      time: new Date()
    });
  };
  render() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const daysOW = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const day = daysOW[this.state.time.getDay()];
    const date =
      months[this.state.time.getMonth()] + ' ' + this.state.time.getDate();
    const formatAMPM = date => {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    };
    const time = formatAMPM(this.state.time);
    return (
      <div className="col-4">
        <div className="tile">
          <div>{date}</div>
          <div className="tile-icon">
            <b>{time}</b>
          </div>
          <div>{day}</div>
        </div>
      </div>
    );
  }
}

export default Clock;
