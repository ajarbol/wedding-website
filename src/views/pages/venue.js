import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Venue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paralaxYRatio: window && window.innerWidth < 600 ? 0 : 1,
      paralaxXRatio: window && window.innerWidth < 600 ? 0 : 1,
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
      back: `-${this.state.paralaxXRatio * 10}px`,
      middle: `-${this.state.paralaxXRatio * 15}px`,
      castle: `-${this.state.paralaxXRatio * 20}px`,
      front: `-${this.state.paralaxXRatio * 40}px`,
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
                <a href="tel:+45 5965 3300" className="name">+45 5965 3300</a><br />
                <a href="mailto:info@dragsholm-slot.dk">info@dragsholm-slot.dk</a><br />
                <a href="https://goo.gl/maps/sjxrKuNsKRL2" target="_blank" rel="noopener" className="name">See på kort</a>
              </address>
              <div className="copy">
                <p>
                  I vores jagt på at skabe de perfekte rammer for vores bryllup besøgte vi adskillige steder som hver især havde deres unikke charme.
                  Valget faldt dog på et af Danmarks ældste Palatia; <a href="http://www.dragsholm-slot.dk/slotshotel/historie" target="_blank" className="name" rel="noopener">Dragsholm Slot</a>.
                  Her faldt vi for slottes rustikke stemning, Odsherreds flotte grønne og åbne omgivelser, samt den fredsfyldte idyl langt fra storbyens larm.
                  Endvidere har slottet haft stor betydning for Andreas&apos; familie, da det har været et festligt samlingspunkt for bla. Andreas&apos; konfirmation og brødres barnedåb, med traditioner som skattejagt i slottes have organiseret af <a href="https://www.facebook.com/knud.skytte" target="_blank" className="name" rel="noopener">Morfar Knud</a>.
                  I forlængelse af dette inviterer vi derfor til bryllup på Dragsholm Slot.
                </p>
                <p>
                  Vielsen finder sted i slotskapellet, der med sin kapacitet på kun 100 personer vil danne en hyggelig atmosfære rundt om dagens vigtigste begivenhed.
                  Kapellet er en integreret del af slottet og bindes sammen med Riddersalen, af 3 elegante stuer, hvor bryllupsfesten efterfølgende finder sted.
                  Frisk luft kan nydes i slotsgården hvor der efter mørkets frembrud vil være et lille Sankt Hans bål.
                </p>
                <p>
                  Det er umiddelbart være nemmest at komme frem til stedet i bil og man kan forvente en køretur på ca. 1 time 10 minutter fra København.
                  Vi har gjort <Link href="/stay" className="name">overnatning</Link> mulig på slottet, hvis man gerne vil nyde den fulde vinmenu.
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
