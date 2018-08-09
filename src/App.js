import React, { Component } from 'react';
import Header from './components/Header';
import Postswrapper from './components/Postswrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Postswrapper/>
      </div>
    );
  }
}

export default App;
