import React from 'react';
import { Link } from 'react-router-dom';

export default function Tile(props) {
  return (
    <div className="col-2">
      <Link to={props.to}>
        <div className="tile">
          <div className={'bar ' + props.progress}></div>
          <div className="text">
            <div>{props.top}</div>
            <div className="tile-icon">
              <i className={props.icon}></i>
            </div>
            <div>{props.bot}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
