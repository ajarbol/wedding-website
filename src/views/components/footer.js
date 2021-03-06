import { h, Component } from 'preact';

import CSSTransitionGroup from 'preact-css-transition-group';

import { isChrome } from '../components/browser-detection';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showSocial: {
        left: false,
        right: false
      }
    };
  }

  componentDidMount() {
    this._teaseProfile();
  }

  _enterSocial(side, restrictMobile = true) {
    if (!restrictMobile || window.innerWidth > 768) {
      const { showSocial } = this.state;
      this.setState({ showSocial: { ...showSocial, [side]: true }});
    }
  }

  _leaveSocial(side) {
    const { showSocial } = this.state;
    this.setState({ showSocial: { ...showSocial, [side]: false }});
  }

  _teaseProfile() {
    if (this.props.allowProfile) {
      setTimeout(() => this._enterSocial('left', false), 10000);
      setTimeout(() => this._enterSocial('right', false), 10200);
      setTimeout(() => this._leaveSocial('right', false), 13800);
      setTimeout(() => this._leaveSocial('left', false), 14000);
    }
  }

  render (props, state) {
    return (
      <div className={`footer ${this.props.for}`}>
        {this.props.for === "left" ? (
          <a onMouseEnter={() => this._enterSocial('left')} aria-label="Mathilde Instagram profile" href="https://www.instagram.com/m.hjalager/" target="_blank" rel="noopener">
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><defs><path d="M0 .008h24.992v24.989H0z"/></defs><g fill="none" fill-rule="evenodd"><path d="M12.496.008c-3.394 0-3.82.014-5.152.075-1.33.06-2.238.272-3.033.58a6.125 6.125 0 0 0-2.214 1.442A6.125 6.125 0 0 0 .657 4.32c-.31.794-.521 1.703-.582 3.033C.015 8.685 0 9.11 0 12.504s.014 3.82.075 5.152c.06 1.33.272 2.238.581 3.033.32.822.747 1.519 1.441 2.214a6.126 6.126 0 0 0 2.214 1.441c.795.309 1.703.52 3.033.58 1.333.062 1.758.076 5.152.076s3.82-.014 5.152-.075c1.33-.06 2.239-.272 3.033-.581a6.126 6.126 0 0 0 2.214-1.441 6.126 6.126 0 0 0 1.441-2.214c.309-.795.52-1.703.58-3.033.062-1.333.076-1.758.076-5.152s-.014-3.82-.075-5.152c-.06-1.33-.272-2.239-.58-3.033a6.126 6.126 0 0 0-1.442-2.214A6.125 6.125 0 0 0 20.68.664c-.794-.309-1.703-.52-3.033-.58C16.315.021 15.89.007 12.496.007zm0 2.251c3.337 0 3.732.013 5.05.073 1.218.056 1.88.26 2.32.43.583.227 1 .498 1.437.935.437.438.708.854.934 1.437.172.44.375 1.102.43 2.32.06 1.318.074 1.713.074 5.05 0 3.337-.013 3.732-.073 5.05-.056 1.218-.26 1.88-.43 2.32-.227.583-.498 1-.935 1.437a3.871 3.871 0 0 1-1.437.934c-.44.171-1.102.375-2.32.43-1.318.06-1.713.073-5.05.073-3.337 0-3.732-.012-5.05-.072-1.218-.056-1.88-.26-2.32-.43-.583-.227-1-.498-1.437-.935a3.872 3.872 0 0 1-.934-1.437c-.171-.44-.375-1.102-.43-2.32-.06-1.318-.073-1.713-.073-5.05 0-3.337.012-3.732.072-5.05.056-1.218.26-1.88.43-2.32.227-.583.498-1 .935-1.437a3.871 3.871 0 0 1 1.437-.934c.44-.172 1.102-.375 2.32-.43 1.318-.06 1.713-.074 5.05-.074z" fill="#FFF" mask="url(#b)"/><path d="M12.5 16.72a4.22 4.22 0 1 1 0-8.44 4.22 4.22 0 0 1 0 8.44zM12.5 6a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM21 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" fill="#FFF"/></g></svg>
            <CSSTransitionGroup
              transitionName={{
                enter: 'footer__social_left_transition-enter',
                enterActive: 'footer__social_left_transition-enter-active',
                leave: 'footer__social_left_transition-leave',
                leaveActive: 'footer__social_left_transition-leave-active',
              }}
              transitionEnterTimeout={350}
              transitionLeaveTimeout={350}
            >
              {state.showSocial.left && props.allowProfile && <div onMouseLeave={() => this._leaveSocial('left')} className="bubble left"><img alt="Picture of Mathilde" src={`/img/profile/mathilde.${isChrome ? 'webp' : 'jpg'}`} /></div>}
            </CSSTransitionGroup>
          </a>
        ) : (
          <span>
            <a aria-label="Andreas Github profile" href="https://github.com/ajarbol/" target="_blank" rel="noopener">
              <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-939.000000, 0.000000)" fill="#FFFFFE">
                    <path d="M951.498849,0 C944.597164,0 939,5.73802563 939,12.8167335 C939,18.4792277 942.581295,23.2825524 947.548451,24.977288 C948.173854,25.0953058 948.401762,24.6995528 948.401762,24.3596615 C948.401762,24.0551756 948.391019,23.2495074 948.38488,22.1802661 C944.907947,22.9544629 944.174345,20.4619268 944.174345,20.4619268 C943.605728,18.9811968 942.786181,18.5870173 942.786181,18.5870173 C941.651248,17.7923641 942.872126,17.8080998 942.872126,17.8080998 C944.126769,17.8985801 944.786703,19.1291124 944.786703,19.1291124 C945.901685,21.0874212 947.712668,20.5217225 948.424783,20.193633 C948.538353,19.3659348 948.861414,18.8010229 949.218239,18.4808013 C946.442678,18.1574325 943.524387,17.0575066 943.524387,12.1463924 C943.524387,10.747488 944.011664,9.60271531 944.811259,8.70735357 C944.682341,8.383198 944.253384,7.07949466 944.934037,5.31552189 C944.934037,5.31552189 945.983026,4.9709099 948.371067,6.62945344 C949.367875,6.34463714 950.437582,6.20301577 951.500384,6.19750828 C952.562418,6.20301577 953.631358,6.34463714 954.6297,6.62945344 C957.016207,4.9709099 958.063661,5.31552189 958.063661,5.31552189 C958.745849,7.07949466 958.316891,8.383198 958.188741,8.70735357 C958.989871,9.60271531 959.473311,10.747488 959.473311,12.1463924 C959.473311,17.0700952 956.550416,18.1534986 953.766414,18.4705731 C954.214555,18.8663261 954.614353,19.6483908 954.614353,20.8435177 C954.614353,22.5571363 954.599005,23.9395181 954.599005,24.3596615 C954.599005,24.7026999 954.824611,25.1016001 955.458455,24.9765012 C960.421775,23.2778316 964,18.4776542 964,12.8167335 C964,5.73802563 958.402836,0 951.498849,0" />
                  </g>
                </g>
              </svg>
            </a>
            <a onMouseEnter={() => this._enterSocial('right')} aria-label="Andreas Instagram profile" href="https://www.instagram.com/ajarbol/" target="_blank" rel="noopener">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"><defs><path d="M0 .008h24.992v24.989H0z"/></defs><g fill="none" fill-rule="evenodd"><path d="M12.496.008c-3.394 0-3.82.014-5.152.075-1.33.06-2.238.272-3.033.58a6.125 6.125 0 0 0-2.214 1.442A6.125 6.125 0 0 0 .657 4.32c-.31.794-.521 1.703-.582 3.033C.015 8.685 0 9.11 0 12.504s.014 3.82.075 5.152c.06 1.33.272 2.238.581 3.033.32.822.747 1.519 1.441 2.214a6.126 6.126 0 0 0 2.214 1.441c.795.309 1.703.52 3.033.58 1.333.062 1.758.076 5.152.076s3.82-.014 5.152-.075c1.33-.06 2.239-.272 3.033-.581a6.126 6.126 0 0 0 2.214-1.441 6.126 6.126 0 0 0 1.441-2.214c.309-.795.52-1.703.58-3.033.062-1.333.076-1.758.076-5.152s-.014-3.82-.075-5.152c-.06-1.33-.272-2.239-.58-3.033a6.126 6.126 0 0 0-1.442-2.214A6.125 6.125 0 0 0 20.68.664c-.794-.309-1.703-.52-3.033-.58C16.315.021 15.89.007 12.496.007zm0 2.251c3.337 0 3.732.013 5.05.073 1.218.056 1.88.26 2.32.43.583.227 1 .498 1.437.935.437.438.708.854.934 1.437.172.44.375 1.102.43 2.32.06 1.318.074 1.713.074 5.05 0 3.337-.013 3.732-.073 5.05-.056 1.218-.26 1.88-.43 2.32-.227.583-.498 1-.935 1.437a3.871 3.871 0 0 1-1.437.934c-.44.171-1.102.375-2.32.43-1.318.06-1.713.073-5.05.073-3.337 0-3.732-.012-5.05-.072-1.218-.056-1.88-.26-2.32-.43-.583-.227-1-.498-1.437-.935a3.872 3.872 0 0 1-.934-1.437c-.171-.44-.375-1.102-.43-2.32-.06-1.318-.073-1.713-.073-5.05 0-3.337.012-3.732.072-5.05.056-1.218.26-1.88.43-2.32.227-.583.498-1 .935-1.437a3.871 3.871 0 0 1 1.437-.934c.44-.172 1.102-.375 2.32-.43 1.318-.06 1.713-.074 5.05-.074z" fill="#FFF" mask="url(#b)"/><path d="M12.5 16.72a4.22 4.22 0 1 1 0-8.44 4.22 4.22 0 0 1 0 8.44zM12.5 6a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM21 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" fill="#FFF"/></g></svg>
              <CSSTransitionGroup
                transitionName={{
                  enter: 'footer__social_right_transition-enter',
                  enterActive: 'footer__social_right_transition-enter-active',
                  leave: 'footer__social_right_transition-leave',
                  leaveActive: 'footer__social_right_transition-leave-active',
                }}
                transitionEnterTimeout={350}
                transitionLeaveTimeout={350}
              >
                {state.showSocial.right && props.allowProfile && <div onMouseLeave={() => this._leaveSocial('right')} className="bubble right"><img alt="Picture of Andreas" src={`/img/profile/andreas.${isChrome ? 'webp' : 'jpg'}`} /></div>}
              </CSSTransitionGroup>
            </a>
          </span>
        )}
      </div>
    );
  }
};
