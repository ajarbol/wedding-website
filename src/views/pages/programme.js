import { h } from 'preact';

import { MarkupText, Text } from 'preact-i18n';

import PageWrapper from '../components/page-wrapper';
import { isChrome } from '../components/browser-detection';

import Title from '../components/title';

export default props => {
  return (
    <PageWrapper className="page__programme">
      <div className="content">
        <Title><Text id="programme.title" /></Title>
        <div className="info">
          <p>
            <Text id="programme.info.breakdown" />
          </p>
          <p>
            <MarkupText id="programme.info.toastmaster" />
          </p>
          <p>
            <Text id="programme.info.changes" />
          </p>
        </div>
        <div className="arrow_devider">
          <img className="arrow" alt="arrow" src="/img/arrow/arrow@3x.png" srcSet="/img/arrow/arrow.png, /img/arrow/arrow@2x.png 2x, /img/arrow/arrow@3x.png 3x" />
          <img className="heart" alt="heart" src="/img/arrow/heart@3x.png" srcSet="/img/arrow/heart.png, /img/arrow/heart@2x.png 2x, /img/arrow/heart@3x.png 3x" />
        </div>
        <div className="timeline">
          <article>
            <h2>
              <Text id="programme.schedule.saturday.title" />
            </h2>
            <ul>
              <li>
                <time>14:30</time>
                <Text id="programme.schedule.saturday.items.0" />
              </li>
              <li>
                <time>15:00</time>
                <Text id="programme.schedule.saturday.items.1" />
              </li>
              <li>
                <time>16:00</time>
                <Text id="programme.schedule.saturday.items.2" />
              </li>
              <li>
                <time>18:00</time>
                <Text id="programme.schedule.saturday.items.3" />
              </li>
              <li>
                <time>18:30</time>
                <Text id="programme.schedule.saturday.items.4" />
              </li>
              <li>
                <time>22:00</time>
                <Text id="programme.schedule.saturday.items.5" />
              </li>
              <li>
                <time>23:00</time>
                <Text id="programme.schedule.saturday.items.6" />
              </li>
              <li>
                <time>02:00</time>
                <Text id="programme.schedule.saturday.items.7" />
              </li>
            </ul>
          </article>
          <article>
            <h2>
              <Text id="programme.schedule.sunday.title" />
            </h2>
            <ul>
              <li>
                <time>09:00</time>
                <Text id="programme.schedule.sunday.items.0" />
              </li>
              <li>
                <time>11:00</time>
                <Text id="programme.schedule.sunday.items.1" />
              </li>
            </ul>
          </article>
        </div>
        <img
          className="flowers"
          alt="wedding_flowers"
          src={`/img/flowers/programme_flowers.${ isChrome ? 'webp' : 'jpg'}`}
          srcSet={`/img/flowers/programme_flowers.${ isChrome ? 'webp' : 'jpg'}, /img/flowers/programme_flowers@2x.${ isChrome ? 'webp' : 'jpg'} 2x, /img/flowers/programme_flowers@3x.${ isChrome ? 'webp' : 'jpg'} 3x`}
        />
      </div>
    </PageWrapper>
  );
}
