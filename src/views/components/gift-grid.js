import { h, Component } from 'preact';

import CSSTransitionGroup from 'preact-css-transition-group';
import { isChrome } from '../components/browser-detection';

export default class GiftGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: null,
    };
    this._refs = [];
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown, false);
  }

  _onKeyDown(e) {
    e.preventDefault();
    const { highlight } = this.state;
    const handleNext = indexDiff => {
      if (highlight) {
        const nextEl = this._refs[highlight.index + indexDiff];
        if (nextEl) {
          nextEl.focus();
        } else {
          this._refs[highlight.index].blur();
        }
      }
    };
    switch (e.keyCode) {
      case 39:
        handleNext(1);
        break;
      case 37:
        handleNext(-1);
        break;
      case 27:
        if (highlight) {
          e.stopPropagation();
          this._refs[highlight.index].blur();
        }
      case 9:
        handleNext(e.shiftKey ? -1 : 1) ;
      default: break;
    }
  }

  _handleBlur(e) {
    this.setState({ highlight: null });
  }

  _handleFocus(e, index) {
    const el = e.target;
    const scaleFactor = window.innerWidth < 361 ? 1.5 : 2;
    const newX = (((window.innerWidth - el.offsetWidth) / 2 - el.offsetLeft) / scaleFactor) - 3;
    const newY = (((window.innerHeight - el.offsetHeight) / 2 - el.offsetTop) / scaleFactor) + (window.scrollY / scaleFactor);
    this.setState({
      highlight: {
        index,
        style: { transform: `scale(${scaleFactor}) translate3d(${newX}px, ${newY}px, 0)`, zIndex: 165, cursor: 'default' },
      }
    });
  }
  render({ gifts }, { highlight }) {
    return (
      <div className="gift__grid">
        <CSSTransitionGroup
          transitionName={{
            enter: 'page__gifts_overlay_transition-enter',
            enterActive: 'page__gifts_overlay_transition-enter-active',
            leave: 'page__gifts_overlay_transition-leave',
            leaveActive: 'page__gifts_overlay_transition-leave-active',
          }}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {highlight ? (
            <div className="overlay" />
            ) : null}
        </CSSTransitionGroup>
        <ul>
          {gifts.map((g, i) => (
            <li
              ref={li => this._refs.push(li)}
              style={highlight && highlight.index === i && highlight.style}
              role="button"
              tabIndex={0}
              onBlur={(e) => this._handleBlur(e)}
              onFocus={(e) => this._handleFocus(e, i)}
            >
              <img
                alt={g.alt}
                src={g.imageUri}
              />
              <CSSTransitionGroup
                transitionName={{
                  enter: 'gift__grid_info_transition-enter',
                  enterActive: 'gift__grid_info_transition-enter-active',
                  leave: 'gift__grid_info_transition-leave',
                  leaveActive: 'gift__grid_info_transition-leave-active',
                }}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={600}
              >
                {highlight && highlight.index === i ? (
                  <div className="info">
                    <span>
                      {g.company}<br />
                      {g.title}
                    </span>
                    <span>
                      {g.amount || ''}<br />
                      {g.price}
                    </span>
                  </div>
                ) : null}
              </CSSTransitionGroup>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}