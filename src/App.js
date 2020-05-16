import React from 'react';
// import './App.css';
import Home from './Components/Pages/Home';

import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
