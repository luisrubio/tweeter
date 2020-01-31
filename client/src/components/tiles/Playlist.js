import React from 'react';

export default function Playlist(props) {
  let shower = (
    <div>
      <div>2. Manuel</div>
      <div>3. Juan</div>
    </div>
  );
  if (props.block === 0 || props.block === 2) {
    shower = (
      <div>
        <div>2. Juan</div>
        <div>3. Manuel</div>
      </div>
    );
  } else if (props.block === 1 || props.block === 3) {
    shower = (
      <div>
        <div>2. Manuel</div>
        <div>3. Juan</div>
      </div>
    );
  }
  return (
    <div className="col-6">
      <div className="tile double totoro">
        <div className="player text-left">
          <div className="row">
            <div className="col-5">
              <h4>
                <u className="tiji">6:20 AM</u>
                <div>• Wake Up</div>
              </h4>
              <h4>
                <u className="tiji">6:50 AM</u>
                <div>• Matutina</div>
                <div>• Independent Studies</div>
              </h4>

              <h4>
                <u className="tiji">7:50 PM</u>
                <div>• Sleep</div>
              </h4>
            </div>
            <div className="col-5">
              <h4>
                <u className="tiji">Shower Order:</u>
                <div>1. Jackeline</div>
                {shower}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
