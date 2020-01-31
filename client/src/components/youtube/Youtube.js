import React, { Component } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      vid: 'Y7dpJ0oseIA',
      loading: true
    };
  }

  componentDidMount() {
    const KEY = 'AIzaSyCedIlWoDmVbm_p9-RPZbx0uSKOIXB-Ack';
    const CATEGORY = 'jovenes';
    const TERMY = 'jovenes drministries devocion matutina para';
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'noviembre',
      'diciembre'
    ];
    const d = new Date();
    const DATE =
      months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();

    const QUERY = TERMY + ' ' + CATEGORY + ' ' + DATE;
    console.log(QUERY);
    // const CHANNEL = 'UCNpffyr-7_zP1x1lS89ByaQ';
    const url =
      'https://www.googleapis.com/youtube/v3/search?q=' +
      QUERY +
      '&key=' +
      KEY +
      '&part=snippet,id&order=date&maxResults=20';
    console.log(url);
    axios.get(url).then(res => {
      const vid = res.data.items[0].id.videoId;

      // console.log(results);

      // console.log(vid);
      this.setState({ vid, loading: false });
    });
  }

  render() {
    let videoPlayer;
    if (this.state.loading) {
      videoPlayer = 'loading..';
    } else {
      videoPlayer = (
        <div className="ytv">
          <div className="overhead"></div>
          {/* <iframe
            width="560"
            height="315"
            src={
              'https://www.youtube.com/embed/' + this.state.vid + '?autoplay=1'
            }
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=' + this.state.vid}
            playing={true}
            width="100%"
            height="100vh"
          />
        </div>
      );
    }
    return <div>{videoPlayer}</div>;
  }
}

export default Youtube;
