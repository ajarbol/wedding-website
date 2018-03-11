import { h } from 'preact';

import { Link } from 'preact-router';

export default props => {
  return (
    <article className="page page__gifts">
      <Link href="/" className="hot_corner" />
      <div className="page_wrapper">
        <div className="content">
          <img className="title" alt="Gavelisten" src="/img/headers/gifts@3x.png" srcSet="/img/headers/gifts.png, /img/headers/gifts@2x.png 2x, /img/headers/gifts@3x.png 3x" />
          <div className="info">
            <p>
              Vores ønskeliste er stadig under udarbejdning men kan findes her på siden snarest.
              Vi er glade for at have Mathildes bror, Lasse, og hans kæreste, <a href="https://www.facebook.com/profile.php?id=100003710135467" className="name" target="_blank" rel="noopener">Maria</a>, som gavekoordinatore.
            </p>
            <p>
              De kan fanges på e-mail: <a href="mailto:gavekoordinator@andreas-mathilde.com">gavekoordinator@andreas-mathilde.com</a>.
            </p>
          </div>
          <div className="flowers">
            <img alt="wedding_flowers" src="/img/flowers/gift_flowers@3x.png" srcSet="/img/flowers/gift_flowers.png, /img/flowers/gift_flowers@2x.png 2x, /img/flowers/gift_flowers@3x.png 3x" />
          </div>
        </div>
      </div>
    </article>
  );
}
