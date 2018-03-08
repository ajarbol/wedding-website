import { h } from 'preact';

import { Link } from 'preact-router';

export default () => (
  <article className="page page__programme">
    <div className="page__background" />
    <Link href="/" className="hot_corner" />
    <div className="content">
      <img
        alt="Programmet"
        src="/img/headers/programme@3x.png"
        srcSet="/img/headers/programme.png, /img/headers/programme@2x.png 2x, /img/headers/programme@3x.png 3x"
      />
      <div className="info">
        <p>
          Anton toast master Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="arrow_devider">
        <img
          className="arrow"
          alt="arrow"
          src="/img/arrow/arrow@3x.png"
          srcSet="/img/arrow/arrow.png, /img/arrow/arrow@2x.png 2x, /img/arrow/arrow@3x.png 3x"
        />
        <img
          className="heart"
          alt="heart"
          src="/img/arrow/heart@3x.png"
          srcSet="/img/arrow/heart.png, /img/arrow/heart@2x.png 2x, /img/arrow/heart@3x.png 3x"
        />
      </div>
      <div className="timeline">
        <article>
          <h2>Lørdag den 23. Juni</h2>
          <ul>
            <li>
              <time>14:30</time>Vielse i Dragsholm Slotskirke
            </li>
            <li>
              <time>15:30</time>Reception og kage i parken
            </li>
            <li>
              <time>16:30</time>Rundvisning
            </li>
            <li>
              <time>18:30</time>Velkomstdrink
            </li>
            <li>
              <time>19:00</time>Middag
            </li>
            <li>
              <time>23:00</time>Bar og musik
            </li>
            <li>
              <time>01:00</time>Natmad
            </li>
          </ul>
        </article>
        <article>
          <h2>Søndag</h2>
          <ul>
            <li>
              <time>10:00</time>Brunch og hygge
            </li>
            <li>
              <time>12:00</time>Gåtur i parken
            </li>
          </ul>
        </article>
      </div>
      <img
        className="flowers"
        alt="wedding_flowers"
        src="/img/flowers/programme_flowers@3x.png"
        srcSet="/img/flowers/programme_flowers.png, /img/flowers/programme_flowers@2x.png 2x, /img/flowers/programme_flowers@3x.png 3x"
      />
    </div>
  </article>
);
