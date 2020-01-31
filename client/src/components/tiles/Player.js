import React from 'react';

const Player = props => {
  const emojis = ['fa-smile', 'fa-meh', 'fa-frown'];
  let state = 0;
  if (props.over > 0) {
    state = 2;
  } else if (props.late > 0) {
    state = 2;
  } else if (props.current > 0) {
    state = 1;
  }
  const icon = emojis[state];
  return (
    <div className="col-4">
      <div className={'tile-alt status-' + state}>
        <div>
          <h5>{props.name}</h5>
        </div>
        <div className="tile-icon">
          <i className={'far ' + icon}></i>
        </div>
      </div>
    </div>
  );
};
export default Player;
