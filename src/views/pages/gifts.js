import { h } from 'preact';

import { MarkupText, Text } from 'preact-i18n';

import PageWrapper from '../components/page-wrapper';
import { isChrome } from '../components/browser-detection';

import Title from '../components/title';

export default props => {
  return (
    <PageWrapper className="page__gifts">
      <div className="content">
        <Title><Text id="gifts.title" /></Title>
        <div className="info">
          <p>
            <Text id="gifts.copy.underWay" />
          </p>
          <p>
            <MarkupText id="gifts.copy.thanks" />
          </p>
        </div>
        <div className="flowers">
          <img
            alt="wedding_flowers"
            src={`/img/flowers/gift_flowers.${ isChrome ? 'webp' : 'jpg'}`}
            srcSet={`/img/flowers/gift_flowers.${ isChrome ? 'webp' : 'jpg'}, /img/flowers/gift_flowers@2x.${ isChrome ? 'webp' : 'jpg'} 2x, /img/flowers/gift_flowers@3x.${ isChrome ? 'webp' : 'jpg'} 3x`}
          />
        </div>
      </div>
    </PageWrapper>
  )
}
