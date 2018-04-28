import { h } from 'preact';
import { Link } from 'preact-router';

import CSSTransitionGroup from 'preact-css-transition-group';

import { isIE, isEdge } from '../components/browser-detection';

export default ({ className, children, ...props }) => (
  <article className={`page ${className}`} {...props}>
    {(isIE || isEdge) ? (
      <Link href="/" className="ie_back" aria-label="Close page">
        <svg viewBox="0 0 29 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-956.000000, -40.000000)" strokeWidth="3">
                    <g transform="translate(970.000000, 62.000000) scale(1, -1) translate(-970.000000, -62.000000) translate(945.000000, 27.000000)">
                        <path d="M25.5,15.5 L25.5,55.5" strokeLinecap="square"></path>
                        <polyline points="12 27 25.324124 15 39 27"></polyline>
                    </g>
                </g>
            </g>
        </svg>
      </Link>
    ) : <Link href="/" className="hot_corner" aria-label="Close page" />}
    <div
      className={`page_wrapper ${ (isIE || isEdge) ? '' : 'clip'}`}
    >
      {children}
    </div>
  </article>
);
