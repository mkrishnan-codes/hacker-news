import React, { useEffect } from 'react';
// import './App.css';
import Home from './Components/Home';

import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
function App(props) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home {...props} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
