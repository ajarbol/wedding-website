import { h, Component } from 'preact';
import { isIE, isEdge } from './browser-detection';

export default class HeroDevider extends Component {

  render() {
    return (
      <svg className="hero__devider" width="213px" height="30px" viewBox="0 0 213 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-420.000000, -504.000000)">
            <g transform="translate(334.000000, 224.000000)">
              <g transform="translate(86.000000, 280.000000)">
                <path className="hero__devider_burst" d="M26,15.498172 C25.421662,15.1350647 0.585919745,6.44292103 0.00907229274,14.2308014 C-0.561812912,21.8953094 26,15.498172 26,15.498172" fill="#0E1F32" />
                <path className="hero__devider_burst delayMore" d="M28,10 C27.7677503,9.58698205 15.3615018,-3.75492185 12.3246168,1.03751054 C9.33329982,5.75303614 28,10 28,10" fill="#0E1F32" />
                <path className="hero__devider_burst delayMore" d="M28,20 C27.7677503,20.4143473 15.3615018,33.7531992 12.3246168,28.963287 C9.33329982,24.2474162 28,20 28,20" fill="#0E1F32" />
                <path className="hero__devider_burst" d="M189,15.4965922 C189.532464,15.1362958 212.456285,6.44283811 212.991683,14.2303224 C213.516813,21.8967113 189,15.4965922 189,15.4965922" fill="#0E1F32" />
                <path className="hero__devider_burst delayMore" d="M187,11 C187.218886,10.5855589 198.847774,-2.75398006 201.696235,2.03714147 C204.497687,6.75387613 187,11 187,11" fill="#0E1F32" />
                <path className="hero__devider_burst delayMore" d="M187,19 C187.218886,19.4129267 198.847774,32.7541026 201.696235,27.9629384 C204.497687,23.2461617 187,19 187,19" fill="#0E1F32" />
                <path className={ isIE || isEdge ? 'hero__devider_burst' : 'hero__devider_stroke' } style={{ strokeDasharray: isIE ? 2000 : 200 }} d="M36.7553997,14.8351214 C72.6574399,14.8351214 92.7405783,14.8351214 97.0048147,14.8351214 C103.401169,14.8351214 109.685098,25.6535513 104.376029,25.4410667 C99.0669609,25.228582 103.654539,14.8351214 111.533453,14.8351214 C119.412367,14.8351214 175.399026,15.6075554 177.22561,14.8351214" stroke="#0E1F32" strokeWidth="1.5" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
