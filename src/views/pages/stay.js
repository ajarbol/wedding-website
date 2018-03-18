import { h } from 'preact';
import { MarkupText, Text } from 'preact-i18n';

import PageWrapper from '../components/page-wrapper';

import Title from '../components/title';

const topStars = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15'];
const bottomStars = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11'];

export default () => {
  return (
    <PageWrapper className="page__stay">
      <div className="content">
        <Title className="light"><Text id="stay.title" /></Title>
        <div className="info">
          <div className="copy">
            <p>
              <Text id="stay.copy.perks" />
            </p>
            <p>
              <Text id="stay.copy.checkin" />
            </p>
            <p>
              <MarkupText id="stay.copy.price" />
            </p>
            <p>
              <MarkupText id="stay.copy.deadline" />
            </p>
          </div>
          <div className="stary_artwork">
            {topStars.map(s => <img alt={`star-${s}`} src={`/img/stars/${s}.png`} />)}
          </div>
        </div>
        <div className="stary_mobile_artwork">
          {bottomStars.map(s => <img alt={`star-${s}`} src={`/img/stars/${s}.png`} />)}
        </div>
      </div>
    </PageWrapper>
  );
}
