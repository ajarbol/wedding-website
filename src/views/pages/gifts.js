import { h, Component } from 'preact';

import { MarkupText, Text } from 'preact-i18n';

import PageWrapper from '../components/page-wrapper';
import GiftGrid from '../components/gift-grid';
import { isChrome } from '../components/browser-detection';

import Title from '../components/title';

const gifts = [
  {
    alt: 'arne_jacobsen_clocks',
    title: 'City Hall Clock, 21 cm',
    company: 'ARNE JACOBSEN',
    price: 'vejl. 1.799 kr.',
    imageUri: `/img/gifts/wall_clock.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'dualit_haandmixer',
    title: 'Dualit håndmixer, chrome',
    company: 'DUALIT',
    price: 'vejl. 899 kr.',
    imageUri: `/img/gifts/dualit.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'bang_olufsen_a6',
    title: 'Beoplay A6, dark gray',
    company: 'BANG & OLUFSEN',
    price: 'vejl. 5999 kr.',
    imageUri: `/img/gifts/bogo.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'eva_solo_frying_pan',
    title: 'Stainless steel frying pan,\n28cm',
    company: 'EVA SOLO',
    price: 'vejl. 799 kr.',
    imageUri: `/img/gifts/eva-solo.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'rosendahl_champange',
    title: 'Champangeglas, 24cl',
    company: 'ROSENDAHL GRAND CRU',
    amount: '2 stk.',
    price: 'vejl. 169 kr.',
    imageUri: `/img/gifts/rosendahl_champange.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'rosendahl_bordeaux',
    title: 'Bordeauxglas, 45cl',
    company: 'ROSENDAHL GRAND CRU',
    amount: '4 stk.',
    price: 'vejl. 169 kr.',
    imageUri: `/img/gifts/rosendahl_bordeaux.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'rosendahl_opbevaring',
    title: 'Opbevaringsglas,\n1L/1.5L/2L',
    company: 'ROSENDAHL GRAND CRU',
    price: 'vejl. 199-249 kr.',
    imageUri: `/img/gifts/rosendahl_opbevaring.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'holmegaard_cocoon',
    title: 'Cocoon vase, smoke 20.5 cm',
    company: 'HOLMEGAARD',
    price: 'vejl. 499 kr.',
    imageUri: `/img/gifts/cocoon.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'lecruset_redskabskrukke',
    title: 'Redskabskrukke, rød',
    company: 'LA CRUSET',
    price: 'vejl. 229 kr.',
    imageUri: `/img/gifts/lecruset_redskabskrukke.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'peugeot_salt_pepper',
    title: 'Salt og peber, 18cm stainless',
    company: 'PEUGEOT',
    amount: '2 stk.',
    price: 'vejl. 399 kr.',
    imageUri: `/img/gifts/salt_pepper.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'alfi_thermokande',
    title: 'Termokande Juwel plissé, 1L',
    company: 'ALFI',
    price: 'vejl. 1899 kr.',
    imageUri: `/img/gifts/alfi.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'royal_multi',
    title: 'Multi cup, 25cl',
    company: 'ROYAL COPENHAGEN',
    amount: '2 stk.',
    price: 'vejl. 599 kr.',
    imageUri: `/img/gifts/royal_multi.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'sodahl_sengelinned',
    title: 'Vivid Romance, 140x200cm',
    company: 'SÖDAHL',
    amount: '2 stk.',
    price: 'vejl. 349 kr.',
    imageUri: `/img/gifts/sengetoj.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'zwilling_flatware',
    title: 'Jessica 51 pcs set',
    company: 'ZWILLING',
    price: 'vejl. 3299 kr.',
    imageUri: `/img/gifts/zwilling.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'george_jensen_bloom',
    title: 'Bloom skål, høj - medium',
    company: 'GEORGE JENSEN',
    price: 'vejl. 699 kr.',
    imageUri: `/img/gifts/george_bloom.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'weber_go_anywhere',
    title: 'Gasgrill Go-anywhere',
    company: 'WEBER',
    price: 'vejl. 999 kr.',
    imageUri: `/img/gifts/weber.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'weber_go_anywhere_bag',
    title: 'Taske Go-anywhere',
    company: 'WEBER',
    price: 'vejl. 289 kr.',
    imageUri: `/img/gifts/weber_cover.${ isChrome ? 'webp' : 'jpg'}`,
  },
  {
    alt: 'bang_olufsen_a1',
    title: 'Beoplay A1, natural',
    company: 'BANG & OLUFSEN',
    price: 'vejl. 1899 kr.',
    imageUri: `/img/gifts/bogoa.${ isChrome ? 'webp' : 'jpg'}`,
  }
];

const mainGift = [{
  alt: 'hawaii',
  title: 'Hawaii',
  company: 'HONEYMOON',
  imageUri: `/img/gifts/beach.${ isChrome ? 'webp' : 'jpg'}`,
  amount: 'SWIFT: NDEADKKK',
  price: 'IBAN: DK6420003483205898'
}];

export default class Layout extends Component {
  constructor(props) {
    super(props);
  
    this.scrollContainer = null;
  }
  render (){
    return (
      <PageWrapper className="page__gifts">
        <div className="content" ref={content => { this.scrollContainer = content; }} >
          <Title><Text id="gifts.title" /></Title>
          <div className="info">
            <p>
              <MarkupText id="gifts.copy.thanks" />
            </p>
            <p>
              <Text id="gifts.honeymoon" />
            </p>
          </div>
          <GiftGrid gifts={mainGift} scrollTop={() => this.scrollContainer.scrollTop} />
          <img
            alt="wedding_flowers_2"
            className="middle_flowers"
            src={`/img/flowers/gift_flowers_2.${ isChrome ? 'webp' : 'jpg'}`}
            srcSet={`/img/flowers/gift_flowers_2.${ isChrome ? 'webp' : 'jpg'}, /img/flowers/gift_flowers_2@2x.${ isChrome ? 'webp' : 'jpg'} 2x, /img/flowers/gift_flowers_2@3x.${ isChrome ? 'webp' : 'jpg'} 3x`}
          />
          <GiftGrid gifts={gifts} scrollTop={() => this.scrollContainer.scrollTop} />
          <div className="flowers">
            <img
              alt="wedding_flowers"
              src={`/img/flowers/gift_flowers.${ isChrome ? 'webp' : 'jpg'}`}
              srcSet={`/img/flowers/gift_flowers.${ isChrome ? 'webp' : 'jpg'}, /img/flowers/gift_flowers@2x.${ isChrome ? 'webp' : 'jpg'} 2x, /img/flowers/gift_flowers@3x.${ isChrome ? 'webp' : 'jpg'} 3x`}
            />
          </div>
        </div>
      </PageWrapper>
    );
  }
};
