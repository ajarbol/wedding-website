import { h } from 'preact';

import { Link } from 'preact-router';

export default props => {
  return (
    <article className="page page__programme">
      <Link href="/" className="hot_corner" />
      <div className="page_wrapper">
        <div className="content">
          <img className="title" alt="Programmet" src="/img/headers/programme@3x.png" srcSet="/img/headers/programme.png, /img/headers/programme@2x.png 2x, /img/headers/programme@3x.png 3x" />
          <div className="info">
            <p>
              Vi anbefaler at I kommer en halv time før i slotskirken, så Andreas ikke skal stå og vente for lang tid alene på sin Mathilde.
              Efter vielsen vil receptionen finde sted i den idylliske slotspark, hvor der vil blive budt på bobler og bryllupskage.
              Dernæst vil der være rundvisning på slottet, mens Brudeparret vil blive fotograferet på og omkring slottet.
            </p>
            <p>
              Der vil være en kort pause i programmet efter rundvisningen, inden vi byder på velkomstdrinks og middagen serveres.
              Under middagen er vi meget glade for at Andreas&apos; bror, <a href="https://www.facebook.com/anton.jarbol" target="_blank" className="name" rel="noopener">Anton</a>, har sagt ja til rollen som toastmaster.
              Indslag skal således koordineres med ham via e-mail: <a href="mailto:toastmaster@andreas-mathilde.com">toastmaster@andreas-mathilde.com</a> senest den <b>20. Juni</b>.
            </p>
            <p>
              Programmet er forbeholdt ændringer.
            </p>
          </div>
          <div className="arrow_devider">
            <img className="arrow" alt="arrow" src="/img/arrow/arrow@3x.png" srcSet="/img/arrow/arrow.png, /img/arrow/arrow@2x.png 2x, /img/arrow/arrow@3x.png 3x" />
            <img className="heart" alt="heart" src="/img/arrow/heart@3x.png" srcSet="/img/arrow/heart.png, /img/arrow/heart@2x.png 2x, /img/arrow/heart@3x.png 3x" />
          </div>
          <div className="timeline">
            <article>
              <h2>Lørdag den 23. Juni</h2>
              <ul>
                <li><time>14:30</time>Vielse i Dragsholm Slotskirke</li>
                <li><time>15:00</time>Reception og kage i parken</li>
                <li><time>16:00</time>Rundvisning</li>
                <li><time>18:00</time>Velkomstdrink</li>
                <li><time>18:30</time>Middag</li>
                <li><time>22:00</time>Kaffe og avec</li>
                <li><time>23:00</time>Bar og dans</li>
                <li><time>02:00</time>Natmad</li>
              </ul>
            </article>
            <article>
              <h2>Søndag</h2>
              <ul>
                <li><time>09:00</time>Brunch og hygge</li>
                <li><time>11:00</time>Gåtur i parken</li>
              </ul>
            </article>
          </div>
          <img className="flowers" alt="wedding_flowers" src="/img/flowers/programme_flowers@3x.png" srcSet="/img/flowers/programme_flowers.png, /img/flowers/programme_flowers@2x.png 2x, /img/flowers/programme_flowers@3x.png 3x" />
        </div>
      </div>
    </article>
  );
}
