import path from 'path';
import fs from 'fs';


export const renderPage = (html, css) => {
	const indexFile = path.resolve('./build/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		if (err) {
			console.error('Something went wrong:', err);
			return 'Oops, better luck next time!';
		}

		return data
			.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
			.replace('<style id="jss-server-side"></style>', `<style id="jss-server-side">${css}</style>`)
	});
}