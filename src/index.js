import { render } from 'preact';
import GAnalytics from 'ganalytics';
import './index.sass';

let App;
let el = document.getElementById('app');

const init = () => {
	App = require('./views').default;
	el = render(App, el, el.lastChild);
}

init();

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/sw.js');
	}

	// add Google Analytics
	window.ga = new GAnalytics('UA-115506677-1');
} else {
	// use preact's devtools
	require('preact/devtools');
	// listen for HMR
	if (module.hot) {
		module.hot.accept('./views', init);
	}
}
