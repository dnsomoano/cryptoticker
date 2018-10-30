import React, { Component } from "react";
import "./App.css";
import CoinList from "./Components/CoinList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">List of Crypto Currencies</h1>
        </header>
        <section className="body">
          <table className="coin-table">
            <tbody>
              <tr>
                <th className="coin-rank-header">Rank</th>
                {/* <th className="coin-icon-header">Icon</th> */}
                <th className="coin-name-header">Name</th>
                <th className="coin-price-header">Price</th>
                <th>Sparklines</th>
                <th className="coin-change-1h-header">% Change (1hr)</th>
                <th className="coin-change-24h-header">% Change (24h)</th>
                <th className="coin-change-7d-header">% Change (7d)</th>
              </tr>
              <CoinList />
            </tbody>
          </table>
        </section>
        <a href="https://github.com/dnsomoano">
          <footer id="dev-footer">® Created by Daniel N Somoano</footer>
        </a>
      </div>
    );
  }
}

export default App;
