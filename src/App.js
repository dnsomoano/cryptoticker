import React, { Component } from "react";
import "./App.css";
import CoinList from "./CoinList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">List of Crypto Currencies</h1>
        </header>
        <table>
          <tbody>
            <tr>
              <th>Rank</th>
              <th className="currencyName">Icon</th>
              <th>Name</th>
              <th>Price</th>
              <th className="hourlyChange">% Change (1hr)</th>
              <th className="dailyChange">% Change (24h)</th>
              <th>% Change (7d)</th>
            </tr>
            <CoinList />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
