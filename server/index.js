// import path from 'path';
// import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import App from '../src/App';
import theme from '../src/theme';
import { renderPage } from './wrapHtml';
import compression from 'compression';
const PORT = process.env.PORT || 7777;
const app = express();
app.use(compression())
const renderHandler = (req, res) => {
  const sheets = new ServerStyleSheets();
  // const preloadedState = store.getState()
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
    ),
  );

  const css = sheets.toString();

  res.send(renderPage(html, css));
}

app.use(express.static('./build'));
app.use(renderHandler);

app.listen(PORT, () => {
  console.log(`👍 Server is listening on port ${PORT}`);
});