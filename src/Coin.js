import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <tr>
        <td className="coin-rank">{this.props.rank}</td>
        <td className="coinIcon">
          <img
            src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${
              this.props.rank
            }.png`}
            alt={this.props.name}
          />
        </td>
        <td className="coinName">{this.props.name}</td>
        <td className="coinPrice">{this.props.price}</td>
        <td>{this.props.change1h}%</td>
        <td className="coin-change-24h">{this.props.change24h}%</td>
        <td className="coin-change-7d">{this.props.change7d}%</td>
      </tr>
    );
  }
}

export default Coin;
