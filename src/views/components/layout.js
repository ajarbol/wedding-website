import { h, Component } from 'preact';
import { route, Link } from 'preact-router';

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
    const { locale } = this.state;
    switch(url.toLowerCase()) {
      case '/programme':
        return <Programme locale={locale} />;
      case '/venue':
        return <Venue locale={locale} />;
      case '/stay':
        return <Stay locale={locale} />;
      case '/gifts':
        return <Gifts locale={locale} />;
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
    const { locale } = this.state;
    return (
			<IntlProvider definition={this._getLocale(locale)}>
        <div id="content">
          <div className="frame">
            <div
              className="layout_scale"
              style={{
                transform: page ? `scale(${scaleX}, ${scaleY})` : 'scale(1)',
              }}
            >
              <a
                href={locale === 'da' ? '?l=en' : '?l=da'}
                className="locale"
              >
                {locale === 'da' ? 'Say what?' : 'På dansk, tak!'}
              </a>
    				  <Hero />
              <Footer allowProfile={!page} />
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
        </div>
			</IntlProvider>
  	);
  }
}
