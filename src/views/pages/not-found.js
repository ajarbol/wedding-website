import { h } from 'preact';
import { Link } from 'preact-router';

import SocialFooter from '../components/social-footer';

import { isChrome } from '../components/browser-detection';

const imagePreloads = [
  '/headers/gifts@3x.png',
  '/headers/programme@3x.png',
  '/headers/stay@3x.png',
  '/headers/venue@3x.png',
  '/flowers/gift_flowers@3x.png',
  '/arrow/arrow@3x.png',
  '/arrow/heart@3x.png',
  '/flowers/programme_flowers@3x.png',
  '/stars/a1.png',
  '/stars/b1.png'
];

export default () => (
  <div className="hero hero__container">
    <div className="hero__graphic" style={{ backgroundImage: `url('/img/hero.${isChrome ? 'webp' : 'jpg'}')` }} />
    <div className="hero__title">
      <img alt="The page was not found" src={`/img/not_found/404.${isChrome ? 'png' : 'png'}`}/>
    </div>
    <SocialFooter />
  </div>
);
