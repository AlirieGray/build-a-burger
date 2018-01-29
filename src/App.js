import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Receipt from './components/Receipt'
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Menu />
          <Receipt />
        </div>
      </Provider>
    );
  }
}

export default App;
