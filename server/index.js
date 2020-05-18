// import path from 'path';
import qs from 'qs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import Home from '../src/Components/Home';
import theme from '../src/theme';
import { renderPage } from './wrapHtml';
import compression from 'compression';
import { configureStoreWithPrestate } from '../src/redux/store';
import { initialState } from '../src/redux/reducer';
import { Provider } from 'react-redux';
const PORT = process.env.PORT || 7777;
const app = express();
app.use(compression())
function renderHandler(req, res) {
  console.log('Request', req)
  const params = qs.parse(req.query)
  const page = parseInt(params.page, 10) || 0;
  let pre = { ...initialState, page }
  const sheets = new ServerStyleSheets();

  const store = configureStoreWithPrestate(pre)
  const html = ReactDOMServer.renderToNodeStream(
    sheets.collect(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </Provider>
    ),
  );
  const preloadedState = store.getState()
  console.log(preloadedState, 'preloadedState');
  const content = renderPage(html, '', preloadedState)
  // const css = sheets.toString();
  // res.set('Cache-Control', 'public, max-age=31557600');
  console.log(content);

  res.send(content);
}

app.use(express.static('./build'));
app.use(renderHandler);
console.log(PORT, 'PORT');

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 🚚🚚🚚 ${new Date()}`);
});