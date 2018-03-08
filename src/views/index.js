import { h } from 'preact';
import { Router } from 'preact-router';

import Layout from './components/layout';

// track pages on route change
const onChange = obj =>
  window.ga && window.ga.send('pageview', { dp: obj.url });

export default (
  <Router onChange={onChange}>
    <Layout default />
  </Router>
);
