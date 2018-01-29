import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'
import Receipt from './components/Receipt'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Receipt />
      </div>
    );
  }
}

export default App;
