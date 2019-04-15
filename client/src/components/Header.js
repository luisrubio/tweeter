import React from 'react';

const Header = props => {
  return (
    <div className="header fixed-top">
      <h1 className="title is-1" data-aos="fade-up">
        <a href="#" onClick={props.onClickTop}>
          <i className="fas fa-crow" /> Tweeter
        </a>
      </h1>
    </div>
  );
};

export default Header;
