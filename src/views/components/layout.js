import { h, Component } from 'preact';

import CSSTransitionGroup from 'preact-css-transition-group';

import Header from './header';

import Programme from '../pages/programme';
import Venue from '../pages/venue';
import Gifts from '../pages/gifts';
import Pictures from '../pages/pictures';

import Hero from '../pages/hero';

const routes = {
  '/programme': <Programme />,
  '/venue': <Venue />,
  '/gifts': <Gifts />,
  '/pictures': <Pictures />,
};

const scaleFactor = 0.02;

export default class Layout extends Component {

  render() {
    const windowRatio = window.innerHeight / window.innerWidth;
    const margin =  (windowRatio < 1 ? scaleFactor * windowRatio : scaleFactor / windowRatio);
    const [scaleX, scaleY] = windowRatio < 1 ? [1 - scaleFactor, 1 - scaleFactor - margin] : [1 - scaleFactor - margin, 1 - scaleFactor];
  	return (
			<main id="content">
        <div
          className="layout_scale"
          style={{
            transform: routes[this.props.url] ? `scale(0.98)` : 'scale(1)',
          }}
        >
				  <Hero />
        </div>
        <CSSTransitionGroup
          transitionName={{
            enter: 'layout__page_transition-enter',
            enterActive: 'layout__page_transition-enter-active',
            leave: 'layout__page_transition-leave',
            leaveActive: 'layout__page_transition-leave-active',
          }}
          transitionEnterTimeout={350}
          transitionLeaveTimeout={350}
        >
          {routes[this.props.url] || null}
        </CSSTransitionGroup>
			</main>
  	);
  }
}
