import { h, Component } from 'preact';
import { route } from 'preact-router';

import CSSTransitionGroup from 'preact-css-transition-group';

import Header from './header';

import Programme from '../pages/programme';
import Venue from '../pages/venue';
import Gifts from '../pages/gifts';
//import Pictures from '../pages/pictures';
import Stay from '../pages/stay';

import Hero from '../pages/hero';

const routes = {
  '/programme': <Programme />,
  '/venue': <Venue />,
  '/stay': <Stay />,
  '/gifts': <Gifts />,
  //'/pictures': <Pictures />,
};

const scalePix = 20;

export default class Layout extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown, false);
  }

  _onKeyDown(e) {
    switch (e.keyCode) {
      case 27: // esc
        route('/');
        break;
      default: break;
    }
  }

  render() {
    const [scaleY, scaleX] = [
      1 - (scalePix / window.innerHeight),
      1 - (scalePix / window.innerWidth)
    ];
  	const url = this.props.path || this.props.url;
    return (
			<div id="content" style={{ overflowY: routes[url] ? 'hidden' : 'auto' }}>
        <div
          className="layout_scale"
          style={{
            transform: routes[url] ? `scale(${scaleX}, ${scaleY})` : 'scale(1)',
          }}
        >
				  <Hero />
        </div>
        <CSSTransitionGroup
          component="main"
          transitionName={{
            enter: 'layout__page_transition-enter',
            enterActive: 'layout__page_transition-enter-active',
            leave: 'layout__page_transition-leave',
            leaveActive: 'layout__page_transition-leave-active',
          }}
          transitionEnterTimeout={350}
          transitionLeaveTimeout={350}
        >
          {routes[url] || null}
        </CSSTransitionGroup>
			</div>
  	);
  }
}
