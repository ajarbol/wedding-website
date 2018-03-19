import { h, Component } from 'preact';
import { Link } from 'preact-router';

import { isChrome } from '../components/browser-detection';

export default class ParallaxTrees extends Component {
  constructor(props) {
    super(props);

    props.innerRef({
      onMouseMove: this._onMouseMove.bind(this),
    });

    this.state = {
      paralaxYRatio: window && window.innerWidth < 600 ? 0 : 1,
      paralaxXRatio: window && window.innerWidth < 600 ? 0 : 1,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown, false);
    window.addEventListener("deviceorientation", this._onOrientationChange.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown, false);
    window.removeEventListener("deviceorientation", this._onOrientationChange.bind(this), true);
  }

  _onMouseMove(e) {
    this.setState({
      paralaxYRatio: 1 - Math.abs(e.clientY / window.innerHeight),
      paralaxXRatio: 1 - Math.abs(e.clientX / window.innerWidth),
    });
  }

  _onOrientationChange(e) {
    this.setState({
      paralaxYRatio: 1 - Math.abs((e.beta + 180) / 360),
      paralaxXRatio: 1 - Math.abs((e.gamma + 90) / 180),
    });
  }

  render() {
    const bottomPos = {
      back: `${this.state.paralaxYRatio * 25}px`,
      middle: `${this.state.paralaxYRatio * 37}px`,
      castle: `${this.state.paralaxYRatio * 50}px`,
      front: `${this.state.paralaxYRatio * 100}px`,
    };
    const leftPos = {
      back: `-${this.state.paralaxXRatio * 10}px`,
      middle: `-${this.state.paralaxXRatio * 15}px`,
      castle: `-${this.state.paralaxXRatio * 20}px`,
      front: `-${this.state.paralaxXRatio * 40}px`,
    };
    return (
      <div className="artwork">
        <img alt="artwork-front" style={{ transform: `translate3d(${leftPos.front}, ${bottomPos.front}, 0)` }} className="front" src={`/img/dragsholm/front.${ isChrome ? 'webp' : 'png'}`} />
        <img alt="artwork-castle" style={{ transform: `translate3d(${leftPos.castle}, ${bottomPos.castle}, 0)` }} className="castle" src={`/img/dragsholm/watercolor_castle.${ isChrome ? 'webp' : 'png'}`} />
        <img alt="artwork-middle" style={{ transform: `translate3d(${leftPos.middle}, ${bottomPos.middle}, 0)` }} className="middle" src={`/img/dragsholm/middle.${ isChrome ? 'webp' : 'png'}`} />
        <img alt="artwork-back" style={{ transform: `translate3d(${leftPos.back}, ${bottomPos.back}, 0)` }} className="back" src={`/img/dragsholm/back.${ isChrome ? 'webp' : 'png'}`} />
      </div>
    );
  }
}