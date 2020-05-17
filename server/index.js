// import path from 'path';
// import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import Home from '../src/Components/Home';
import theme from '../src/theme';
import { renderPage } from './wrapHtml';
import compression from 'compression';
const PORT = process.env.PORT || 7777;
const app = express();
app.use(compression())
const renderHandler = (req, res) => {
  const sheets = new ServerStyleSheets();
  // const preloadedState = store.getState()
  const html = ReactDOMServer.renderToNodeStream(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    ),
  );

  // const css = sheets.toString();

  res.send(renderPage(html, ''));
}

app.use(express.static('./build'));
app.use(renderHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 🚚`);
});