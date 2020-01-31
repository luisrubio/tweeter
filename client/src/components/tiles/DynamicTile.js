import React from 'react';
import { Link } from 'react-router-dom';

const DynamicTile = props => {
  const data = props.data;
  let barLength = 0;
  let totalCompleted = 0;
  data.forEach(task => {
    if (task.completed) {
      totalCompleted++;
    }
  });
  let percentage = Math.round((totalCompleted / data.length) * 100);
  let color;

  if (percentage === 100) {
    barLength = 97.5;
  } else {
    barLength = percentage;
  }

  if (percentage === 100) {
    color = 'b-100';
  } else if (percentage > 74) {
    color = 'b-75';
  } else if (percentage > 49) {
    color = 'b-50';
  } else if (percentage > 24) {
    color = 'b-25';
  } else {
    color = 'b-25';
  }

  const barSize = {
    height: barLength + '%'
  };

  let display;
  if (data.length > 0 && percentage === 100) {
    display = (
      <div className="tile">
        <div className={'bar ' + color} style={barSize}></div>
        <div className="text">
          <div>{props.top}</div>
          <div className="tile-icon">
            <i className={props.icon}></i>
          </div>
          <div>
            {totalCompleted}/{props.data.length} Completed - {percentage}%
          </div>
        </div>
      </div>
    );
  } else if (data.length > 0) {
    display = (
      <Link to={'/cat/' + props.to}>
        <div className="tile">
          <div className={'bar ' + color} style={barSize}></div>
          <div className="text">
            <div>{props.top}</div>
            <div className="tile-icon">
              <i className={props.icon}></i>
            </div>
            <div>
              {totalCompleted}/{props.data.length} Completed - {percentage}%
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    display = (
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
  return <div className="col-2">{display}</div>;
};

export default DynamicTile;
