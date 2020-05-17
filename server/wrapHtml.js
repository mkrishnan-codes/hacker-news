import path from 'path';
import fs from 'fs';

const injectState = (preloadedState) => {
	return `<script>
	// WARNING: See the following for security issues around embedding JSON in HTML:
	// https://redux.js.org/recipes/server-rendering/#security-considerations
	window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
		/</g,
		'\\u003c'
	)}
  </script>`;
}

export const renderPage = (html, css, preloadedState) => {
	const indexFile = path.resolve('./build/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		if (err) {
			console.error('Something went wrong:', err);
			return 'Oops, better luck next time!';
		}

		return data
			.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
			.replace('<style id="jss-server-side"></style>', `<style id="jss-server-side">${css}</style>`)
			.replace('<script id="pstate"></script>', injectState(preloadedState))
	});
}