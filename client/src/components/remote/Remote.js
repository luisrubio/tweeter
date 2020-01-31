import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Redirect from '../common/Redirect';

class Remote extends Component {
  click = command => {
    // const url = 'http://10.110.1.111:8060';
    const url = 'http://10.110.1.141:8060';
    axios.post(url + command).then(res => {
      console.log('hello!!!');
    });
  };
  tv = command => {
    const url = 'http://10.110.1.141:8060';
    axios.post(url + command).then(res => {
      console.log('hello!!!');
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="rembor">
          <div className="row">
            <div className="col-1 mt-1 ml-2">
              <div className="pb-3">
                <Link to="/">
                  <div className="remote-btn">
                    <i class="fas fa-long-arrow-alt-left"></i>
                  </div>
                </Link>
              </div>
              <div onClick={() => this.tv('/keypress/power')} className="pb-3">
                <div className="remote-btn red">
                  <i class="fas fa-power-off"></i>
                </div>
              </div>
              <div
                onClick={() => this.tv('/keypress/InputHDMI2')}
                className="pb-3"
              >
                <div className="remote-btn purple">
                  <i class="fas fa-plug"></i>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div class="remote">
                <div class="container-fluid">
                  <div class="row rokumax">
                    <div class="col-4 pl-0 pr-2">
                      <button
                        onClick={() => this.click('/keypress/back')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-long-arrow-alt-left"></i>
                      </button>
                    </div>
                    <div class="col-4 pl-2 pr-2">
                      <button
                        onClick={() => this.click('/keypress/settings')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-asterisk"></i>
                      </button>
                    </div>
                    <div class="col-4 pl-2 pr-0">
                      <button
                        onClick={() => this.click('/keypress/home')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-home"></i>
                      </button>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main_inverse">
                        <div class="roku_mr rad_br"></div>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main rad_tl rad_tr">
                        <button
                          onClick={() => this.click('/keypress/up')}
                          class="btn btn-roku"
                        >
                          <i class="fas fa-chevron-up"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main_inverse">
                        <div class="roku_mr rad_bl"></div>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main rad_tl rad_bl">
                        <button
                          onClick={() => this.click('/keypress/left')}
                          class="btn btn-roku"
                        >
                          <i class="fas fa-chevron-left"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main p-0">
                        <button
                          onClick={() => this.click('/keypress/select')}
                          class="btn btn-roku btn-cir"
                        >
                          OK
                        </button>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main rad_tr rad_br">
                        <button
                          onClick={() => this.click('/keypress/right')}
                          class="btn btn-roku"
                        >
                          <i class="fas fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    <div class="col-4 p-0">
                      <div class="roku_main_inverse">
                        <div class="roku_mr rad_tr"></div>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main rad_bl rad_br">
                        <button
                          onClick={() => this.click('/keypress/down')}
                          class="btn btn-roku"
                        >
                          <i class="fas fa-chevron-down"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-4 p-0">
                      <div class="roku_main_inverse">
                        <div class="roku_mr rad_tl"></div>
                      </div>
                    </div>

                    <div class="col-4 pl-0 pr-2">
                      <button
                        onClick={() => this.click('/keypress/rev')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-backward"></i>
                      </button>
                    </div>
                    <div class="col-4 pl-2 pr-2">
                      <button
                        onClick={() => this.click('/keypress/play')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-play"></i>
                        <i class="fas fa-pause"></i>
                      </button>
                    </div>
                    <div
                      onClick={() => this.click('/keypress/fwd')}
                      class="col-4 pl-2 pr-0"
                    >
                      <button class="btn btn-roku-alt">
                        <i class="fas fa-forward"></i>
                      </button>
                    </div>

                    <div class="col-4 pl-0 pr-2">
                      <button
                        onClick={() => this.tv('/keypress/volumeMute')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-volume-mute"></i>
                      </button>
                    </div>
                    <div class="col-4 pl-2 pr-2">
                      <button
                        onClick={() => this.tv('/keypress/volumeDown')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-volume-down"></i>
                      </button>
                    </div>
                    <div class="col-4 pl-2 pr-0">
                      <button
                        onClick={() => this.tv('/keypress/volumeUp')}
                        class="btn btn-roku-alt"
                      >
                        <i class="fas fa-volume-up"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Redirect />
      </div>
    );
  }
}

export default Remote;
