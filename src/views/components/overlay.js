import { h, Component } from 'preact';

import CSSTransitionGroup from 'preact-css-transition-group';

export default class Overlay extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      show: false,
    };

    props.innerRef({
      show: this.show.bind(this),
      hide: this.hide.bind(this),
    });
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  render(_, { show }) {
    return (
      <CSSTransitionGroup
        transitionName={{
          enter: 'overlay_transition-enter',
          enterActive: 'overlay_transition-enter-active',
          leave: 'overlay_transition-leave',
          leaveActive: 'overlay_transition-leave-active',
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {show ? (
          <div className="overlay" />
          ) : null}
      </CSSTransitionGroup>
    );

  }
}