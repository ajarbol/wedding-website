import { h } from 'preact';

import { Link } from 'preact-router';

export default props => {
  return (
    <article className="page page__gifts">
      <div className="page__background" />
      <Link href="/" className="hot_corner" />
      <div className="content">
        <img alt="Gavelisten" src="/img/headers/gifts@3x.png" srcSet="/img/headers/gifts.png, /img/headers/gifts@2x.png 2x, /img/headers/gifts@3x.png 3x" />
      </div>
    </article>
  );
}
