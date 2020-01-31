import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { tz } from 'moment-timezone';
class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      weather: []
    };
  }
  componentDidMount() {
    this.update();
  }

  update = () => {
    // get weather
    axios
      .get(
        'http://fcc-weather-api.glitch.me/api/current?lat=30.333071&lon=-95.350822'
      )
      .then(res => {
        this.setState({ weather: res.data, loading: false });
        console.log(this.state.weather.main.temp);
      });
  };
  render() {
    let text;
    if (this.state.loading) {
      text = (
        <div className="text">
          <div>Weather</div>
          <div className="tile-icon">
            {/* <i className="fas fa-cloud op"></i> */}
          </div>
          <div>loading..</div>
        </div>
      );
    } else {
      text = (
        <div className="text">
          <div>Weather</div>
          <div className="tile-icon">
            {/* <i className="fas fa-cloud op"></i> */}
            {/* <img
              src={this.state.weather.weather[0].icon}
              class="weather-icon"
              alt=""
            /> */}
            {Math.round((this.state.weather.main.temp * 9) / 5 + 32)}° F
          </div>
          <div>{this.state.weather.weather[0].description}</div>
        </div>
      );
    }
    return (
      <div className="col-2">
        <div className="tile">
          <div className="bar"></div>
          {text}
        </div>
      </div>
    );
  }
}

export default Weather;
