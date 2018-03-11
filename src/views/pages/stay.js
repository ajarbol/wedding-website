import { h } from 'preact';

import { Link } from 'preact-router';

const topStars = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15'];
const bottomStars = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11'];

export default props => {
  return (
    <article className="page page__stay">
      <Link href="/" className="hot_corner" />
      <div className="page_wrapper">
        <div className="content">
          <img alt="Overnatning" src="/img/headers/stay@3x.png" srcSet="/img/headers/stay.png, /img/headers/stay@2x.png 2x, /img/headers/stay@3x.png 3x" />
          <div className="info">
            <div className="copy">
              <p>
                Vi har reserveret samtlige værelser på slottet, så dem der har lyst til at være sammen med os og danse til den lyse morgen, har mulighed for at overnatte og deltage i vores bryllupsbruch dagen efter.
              </p>
              <p>
                Der vil være checkin fra kl. 15, men vi anbefaler, at i checker ind efter rundvisningen på slottet.
                Checkout er formiddagen efter kl. 11.
              </p>
              <p>
                Overnatingen koster 1000 kr. per person i dobbletværrelse og 1350 kr. i enkeltværrelse.
                Booking sker ved at skrive til Dragsholm Slot på e-mail: <a href="mailto:info@dragsholm-slot.dk">info@dragsholm-slot.dk</a> og angive vores booking nummer: <b>15131</b>
              </p>
              <p>
                I bedes booke senest den <b>23. marts</b>.
              </p>
            </div>
            <div className="stary_artwork">
              {topStars.map(s => <img src={`/img/stars/${s}.png`} />)}
            </div>
          </div>
          <div className="stary_mobile_artwork">
            {bottomStars.map(s => <img src={`/img/stars/${s}.png`} />)}
          </div>
        </div>
      </div>
    </article>
  );
}
