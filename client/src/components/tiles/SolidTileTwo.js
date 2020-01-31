import React from 'react';
import { Link } from 'react-router-dom';

const SolidTileTwo = props => {
  let tile;
  if (props.data.length > 0 && props.data[0].completed) {
    // console.log(props.top);
    tile = (
      <div className="tile">
        <div className={'bar b-100'}></div>
        <div className="text">
          <div>{props.top}</div>
          <div className="tile-icon">
            <i className={props.icon}></i>
          </div>
          <div>Completed</div>
        </div>
      </div>
    );
  } else if (props.data.length > 0 && !props.data[0].completed) {
    // console.log(props.top + ' ' + props.data[0].blockID);

    tile = (
      <Link to={'/cat/' + props.to}>
        <div className="tile">
          <div className={'bar b-alert'}></div>
          <div className="text">
            <div>{props.top}</div>
            <div className="tile-icon">
              <i className={props.icon}></i>
            </div>
            <div>Action Required!</div>
          </div>
        </div>
      </Link>
    );
  } else {
    tile = (
      <div className="tile">
        <div className="bar"></div>
        <div className="text">
          <div>{props.top}</div>
          <div className="tile-icon">
            <i className={props.icon + ' op'}></i>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
  return <div className="col-12 mb-1 p-0">{tile}</div>;
};

export default SolidTileTwo;
