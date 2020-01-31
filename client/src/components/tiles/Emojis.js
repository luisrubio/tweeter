import React from 'react';
import Player from './Player';

const Emojis = props => {
  // const data = ÷///this.props.info;
  let content;

  if (props.info === null) {
    content = 'loading';
  } else {
    const open = props.info.slice(0, -1);
    const map = open.map(x => (
      <Player
        key={x._id}
        name={x.name}
        current={x.currentTasks}
        late={x.lateTasks}
        over={x.overTasks}
      />
    ));
    content = (
      <div className="row">
        {map}
        {/* <Player
          status="0"
          name={
            props.info[0].name +
            props.info[0].lateTasks +
            props.info[0].overTasks
          }
        />
        <Player status="0" name={props.info[1].name} />
        <Player status="0" name={props.info[2].name} />
        <Player status="0" name={props.info[3].name} />
        <Player status="1" name={props.info[4].name} /> */}
        <Player status="0" name="Luis" />
      </div>
    );
  }
  return (
    <div className="col-6">
      <div className="double playlist">{content}</div>
    </div>
  );
};

export default Emojis;
