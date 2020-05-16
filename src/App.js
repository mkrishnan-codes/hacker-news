import React from 'react';
// import './App.css';
import Home from './Components/Pages/Home';

import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
function App() {
  return (
    <Provider store={store}>
      <Home name="React World"/>
    </Provider>
  );
}

export default App;
