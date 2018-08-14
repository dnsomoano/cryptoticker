import React, { Component } from 'react';
import './App.css';
import CurrentPrice from './CurrentPrice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto currencies</h1>
        </header>
        <CurrentPrice name={this.props.name} price={this.props.price} />
      </div>
    );
  }
}

export default App;
