import { h, Component } from 'preact';
import { Link } from 'preact-router';

import { MarkupText, Text } from 'preact-i18n';

import PageWrapper from '../components/page-wrapper';
import ParallaxTrees from '../components/parallax-trees';

import Title from '../components/title';

export default () => (
  <PageWrapper className="page__venue" onMouseMove={e => this.parallax.onMouseMove(e)}>
    <div className="content">
      <Title><Text id="venue.title" /></Title>
      <div className="info">
        <address>
          <h2>
            Dragsholm Slot
          </h2>
          Dragsholm Allé <br />
          DK-4534 Hørve <br /><br />
          <a href="tel:+45 5965 3300" className="name">+45 5965 3300</a><br />
          <a href="mailto:info@dragsholm-slot.dk">info@dragsholm-slot.dk</a><br />
          <a href="https://goo.gl/maps/sjxrKuNsKRL2" target="_blank" rel="noopener" className="name">
            <Text id="venue.map" />
          </a>
        </address>
        <div className="copy">
          <p>
            <MarkupText id="venue.copy.intro" />
          </p>
          <p>
            <Text id="venue.copy.ceremony" />
          </p>
          <p>
            <MarkupText id="venue.copy.stay" />
          </p>
        </div>
      </div>
    </div>
    <ParallaxTrees innerRef={parallax => { this.parallax = parallax; }} />
  </PageWrapper>
);
