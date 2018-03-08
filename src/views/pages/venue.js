import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Venue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paralaxRatio: 1,
    };
  }

  _onMouseMove(e) {
    this.setState({ paralaxRatio: 1 - Math.abs(e.clientY / window.innerHeight)})
  }

  render() {
    const backBottom = `-${this.state.paralaxRatio * 25}px`;
    const middleBottom = `-${this.state.paralaxRatio * 37}px`;
    const castleBottom = `-${this.state.paralaxRatio * 50}px`;
    const frontBottom = `-${this.state.paralaxRatio * 100}px`;
    return (
      <article className="page page__venue" onMouseMove={this._onMouseMove.bind(this)}>
        <div className="page__background" />
        <Link href="/" className="hot_corner" />
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
          <img alt="artwork-front" style={{ bottom: frontBottom }} className="front" src="/img/dragsholm/front_new.png" />
          <img alt="artwork-castle" style={{ bottom: castleBottom }} className="castle" src="/img/dragsholm/watercolor_castle_new.png" />
          <img alt="artwork-middle" style={{ bottom: middleBottom }} className="middle" src="/img/dragsholm/middle_new.png" />
          <img alt="artwork-back" style={{ bottom: backBottom }} className="back" src="/img/dragsholm/back_new.png" />
        </div>
      </article>
    );
  }
}
