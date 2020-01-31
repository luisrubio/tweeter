import React from 'react';
import { Link } from 'react-router-dom';

const SolidTileImg = props => {
  let tile;
  const icon = (
    <img
      src="https://s.gravatar.com/avatar/5b175ab3090385b31cc5f04ef08f0fc3?size=496&default=retro"
      alt=""
      className="img-icon op"
      draggable="false"
    />
  );
  if (props.data.length > 0 && props.data[0].completed) {
    // console.log(props.top);
    tile = (
      <div className="tile">
        <div className={'bar b-100'}></div>
        <div className="text">
          <div>{props.top}</div>
          <div className="tile-icon">{icon} </div>
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
            <div className="tile-icon">{icon}</div>
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
          <div className="tile-icon">{icon}</div>
          <div></div>
        </div>
      </div>
    );
  }
  return <div className="col-2">{tile}</div>;
};

export default SolidTileImg;
