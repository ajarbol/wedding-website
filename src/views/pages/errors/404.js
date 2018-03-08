import { h } from 'preact';

export default props => (
  <div className="page page__404">
    <h1>404 Page</h1>
    <p>Looks like you were given a bad link ;-)</p>
    <pre>{props.url}</pre>
  </div>
);
