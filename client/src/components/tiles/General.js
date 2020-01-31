import React from 'react';
import habaticaLogo from '../../assets/habatica.png';
import { Link } from 'react-router-dom';

export default function General() {
  return (
    <div>
      <div className="col-2">
        <Link to="/habitica">
          <div className="tile">
            <div>Habitica</div>
            <img className="img-icon op" alt="Habatica" src={habaticaLogo} />
            <div>Check Profile</div>
          </div>
        </Link>
      </div>
      <div className="col-2">
        <Link to="/remote">
          <div className="tile">
            <div>Roku Remote</div>
            <div class="tile-icon">
              <i class="fas fa-mobile op"></i>
            </div>
            <div>controller </div>
          </div>
        </Link>
      </div>
      <div className="col-2">
        <div className="tile">
          <div>TV Lights</div>
          <div class="tile-icon">
            <i class="fas fa-lightbulb op"></i>
          </div>
          <div>off</div>
        </div>
      </div>
      <div className="col-2">
        <div className="tile">
          <div>Restroom Lights</div>
          <div class="tile-icon">
            <i class="fas fa-lightbulb op"></i>
          </div>
          <div>off</div>
        </div>
      </div>
    </div>
  );
}
