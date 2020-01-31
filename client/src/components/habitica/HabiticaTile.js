import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HabiticaTile extends Component {
  render() {
    return (
      <div className="col-2">
        <Link to="/habitica">
          <div className="tile">
            <div>Habitica</div>
            <div className="tile-icon">
              <i class="fas fa-kiwi-bird op"></i>
            </div>
            <div>check profile</div>
          </div>
        </Link>
      </div>
    );
  }
}
