import React from "react";

const TweetItem = () => {
  return (
    <div className="item">
      <div>
        <img
          src="https://vanillicon.com/v2/1f48183467719c8b709469bd0af588ff.svg"
          alt=""
        />
      </div>
      <div class="columns">
        <div class="column">
          <i class="far fa-comment-alt" /> 2 <i class="far fa-heart" /> 4
        </div>
        <div class="column has-text-right">3:11 PM - 4 Oct 2019</div>
      </div>
    </div>
  );
};

export default TweetItem;
