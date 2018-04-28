import { h, Component } from 'preact';

import CSSTransitionGroup from 'preact-css-transition-group';
import { isChrome } from '../components/browser-detection';

export default class GiftGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: null,
      touchStart: null,
    };
    this._refs = [];
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);

    this._scaleFactor = window.innerWidth < 361 ? 1.5 : 2;
  }

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown, false);
    this._refs.forEach(r => {
      r.removeEventListener('touchstart', this._onTouchStart, false);
      r.removeEventListener('touchmove', this._onTouchMove, false);
      r.removeEventListener('touchend', this._onTouchEnd, false);
    });
  }

  _onTouchStart(e) {
    this.setState({ touchStart: e.targetTouches[0] });
  }

  _onTouchMove(e) {
    if (this.state.highlight) {
      e.preventDefault();
      const newTouch = e.changedTouches[0];
      const deltaX = (newTouch.pageX - this.state.touchStart.pageX) / this._scaleFactor;
      const deltaY = (newTouch.pageY - this.state.touchStart.pageY) / this._scaleFactor;
      const { restingX, restingY } = this.state.highlight;

      const style = { ...this.state.highlight.style, transform: `scale(${this._scaleFactor}) translate3d(${restingX + deltaX}px, ${restingY + deltaY}px, 0)` };
      this.setState({ highlight: { ...this.state.highlight, style,  }});
    }
  }

  _onTouchEnd(e) {
    if (this.state.highlight) {
      this._refs[this.state.highlight.index].blur();
    }
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
    const restingX = (((window.innerWidth - el.offsetWidth) / 2 - el.offsetLeft) / this._scaleFactor) - 3;
    const restingY = (((window.innerHeight - el.offsetHeight) / 2 - el.offsetTop) / this._scaleFactor) + (window.scrollY / this._scaleFactor);
    this.setState({
      highlight: {
        index,
        restingX,
        restingY,
        style: { transform: `scale(${this._scaleFactor}) translate3d(${restingX}px, ${restingY}px, 0)`, zIndex: 165, cursor: 'default' },
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
            <div className="overlay" onClick={this._onTouchEnd} />
            ) : null}
        </CSSTransitionGroup>
        <ul>
          {gifts.map((g, i) => (
            <li
              ref={li => {
                if (li) {
                  this._refs.push(li);
                  li.addEventListener('touchstart', this._onTouchStart, false);
                  li.addEventListener('touchmove', this._onTouchMove, false);
                  li.addEventListener('touchend', this._onTouchEnd, false);
                }
              }}
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