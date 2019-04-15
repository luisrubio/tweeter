import React from 'react';

const Spinner = () => {
  return (
    <div className="has-text-centered">
      <img
        className="spinner"
        alt="loading_spinner"
        src="https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif"
      />
    </div>
  );
};

export default Spinner;
