// import path from 'path';
// import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import App from '../src/App';
import theme from './theme';

const PORT = process.env.PORT || 7777;
const app = express();

const renderFullPage = (html, css) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My page</title>
        <meta
          name="viewport"
           content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}
const render = (req, res) => {
  const sheets = new ServerStyleSheets();

  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    ),
  );

  const css = sheets.toString();

  res.send(renderFullPage(html, css));
}

app.use(express.static('./build'));
app.use(render);

app.listen(PORT, () => {
  console.log(`👍 Server is listening on port ${PORT}`);
});