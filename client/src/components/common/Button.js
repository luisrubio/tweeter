import React from 'react';

const Button = props => {
  const { completed } = props;
  let btnStyle = 'btn-reg';
  if (completed) {
    btnStyle = 'btn-com';
  }
  return (
    <button
      onClick={props.onClick}
      className={'btn btn-lg btn-block ' + btnStyle}
    >
      <div className="row">
        <div className="col-1">
          <i className={'fas fa-lg ' + props.icon}></i>
        </div>
        <div className="col-10 padding">
          <div className="txt-1 pr-0">{props.name}</div>
          <div className="txt-2">
            <i className="fas fa-check"></i> completed on 12.11.19 at 11:54pm.
          </div>
        </div>
        <div className="col-1">{props.counter}</div>
      </div>
    </button>
  );
};

export default Button;
