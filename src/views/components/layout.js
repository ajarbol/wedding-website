import { h, Component } from 'preact';
import { route } from 'preact-router';

import { IntlProvider } from 'preact-i18n';

import CSSTransitionGroup from 'preact-css-transition-group';

import enLocale from '../locals/en-GB';
import daLocale from '../locals/da-DK';

import Footer from '../components/footer';

import Programme from '../pages/programme';
import Venue from '../pages/venue';
import Gifts from '../pages/gifts';
//import Pictures from '../pages/pictures';
import Stay from '../pages/stay';

import Hero from '../pages/hero';

const scalePix = 20;

export default class Layout extends Component {

  constructor(props) {
    super(props);

    const locale = props.l || (window.sessionStorage && window.sessionStorage['l']) || 'da';
    if (props.l && window.sessionStorage) {
      // persist locale for the browser session
      window.sessionStorage['l'] = props.l;
    }

    this.state = {
      locale,
    };
  }

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

  _getLocale(l) {
    switch(l.toLowerCase()) {
      case 'en':
        return enLocale;
      default:
        return daLocale;
    }
  }

  _getPage() {
    const url = this.props.path || this.props.url;
    switch(url.toLowerCase()) {
      case '/programme':
        return <Programme />;
      case '/venue':
        return <Venue />;
      case '/stay':
        return <Stay />;
      case '/gifts':
        return <Gifts />;
      default:
        return null;
    }
  }

  render() {
    const [scaleY, scaleX] = [
      1 - (scalePix / window.innerHeight),
      1 - (scalePix / window.innerWidth)
    ];
    const page = this._getPage();
    return (
			<IntlProvider id="content" definition={this._getLocale(this.state.locale)}>
        <div id="content" style={{ overflowY: page ? 'hidden' : 'auto' }}>
          <div
            className="layout_scale"
            style={{
              transform: page ? `scale(${scaleX}, ${scaleY})` : 'scale(1)',
            }}
          >
  				  <Hero />
            <Footer onLocaleChange={l => this.setState({ locale: this._getLocale(l) })} />
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
            {page}
          </CSSTransitionGroup>
        </div>
			</IntlProvider>
  	);
  }
}
