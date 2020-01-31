import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Redirect from '../common/Redirect';

class Habitica extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <div>
            <img
              src="https://cdn.styleblueprint.com/wp-content/uploads/2017/10/Habitica-app-1200x410.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <br />
          <h1>Under Construction</h1>

          <Link to="/" className="btn btn-lg btn-dark">
            Go Back
          </Link>
        </div>
        <Redirect />
      </div>
    );
  }
}

export default Habitica;
