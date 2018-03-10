import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Venue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paralaxYRatio: 1,
      paralaxXRatio: 1,
    };
  }

  _onMouseMove(e) {
    this.setState({
      paralaxYRatio: 1 - Math.abs(e.clientY / window.innerHeight),
      paralaxXRatio: 1 - Math.abs(e.clientX / window.innerWidth),
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
      back: `${this.state.paralaxXRatio * 10}px`,
      middle: `${this.state.paralaxXRatio * 15}px`,
      castle: `${this.state.paralaxXRatio * 20}px`,
      front: `${this.state.paralaxXRatio * 40}px`,
    };
    return (
      <article className="page page__venue" onMouseMove={this._onMouseMove.bind(this)}>
        <Link href="/" className="hot_corner" />
        <div className="page_wrapper">
          <div className="content">
            <img alt="Stedet" src="/img/headers/venue@3x.png" srcSet="/img/headers/venue.png, /img/headers/venue@2x.png 2x, /img/headers/venue@3x.png 3x" />
            <div className="info">
              <address>
                <h2>
                  Dragsholm Slot
                </h2>
                Dragsholm Allé <br />
                DK-4534 Hørve <br /><br />
                <a href="tel:+45 5965 3300">+45 5965 3300</a><br />
                <a href="mailto:info@dragsholm-slot.dk">info@dragsholm-slot.dk</a>
              </address>
              <div className="copy">
                <p>
                  Brylluppet finder sted på Dragsholm Slot.
                </p>
                <p>
                  Slottet er et af Danmarks ældste, og har i mere end 800 år ligget i det smukke Odsherred. Imens har krige har raset, adelen har giftet sig i slotskirken og prominente fanger er blevet ført over slotsgården. I dag fungerer Dragsholm Slot som hotel med 34 dobbeltværelser, to anerkendte restauranter, selskabs-, kursus- og konferencevirksomhed samt kirke til bryllupper og gudstjenester. Vores stadige ambition er at byde vores gæster velkommen til en oplevelse af sammenhæng og helhed. Kunsten er at bevare og viderebringe den historiske autenticitet og områdets karakter og samtidig bringe slottet og dets kulturhistorie ind i det 21. århundredes funktionalitet og æstetik.
                </p>
              </div>
            </div>
          </div>
          <div className="artwork">
            <img alt="artwork-front" style={{ transform: `translate3d(${leftPos.front}, ${bottomPos.front}, 0)` }} className="front" src="/img/dragsholm/front_new.png" />
            <img alt="artwork-castle" style={{ transform: `translate3d(${leftPos.castle}, ${bottomPos.castle}, 0)` }} className="castle" src="/img/dragsholm/watercolor_castle_new.png" />
            <img alt="artwork-middle" style={{ transform: `translate3d(${leftPos.middle}, ${bottomPos.middle}, 0)` }} className="middle" src="/img/dragsholm/middle_new.png" />
            <img alt="artwork-back" style={{ transform: `translate3d(${leftPos.back}, ${bottomPos.back}, 0)` }} className="back" src="/img/dragsholm/back_new.png" />
          </div>
        </div>
      </article>
    );
  }
}
