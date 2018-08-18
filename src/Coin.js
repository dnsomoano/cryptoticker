import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
        <tr>
          <td class="coinId">{this.props.rank}</td>
          <td class="coinIcon">
            <img
              src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${
                this.props.rank
              }.png`}
            />
          </td>
          <td class="coinName">{this.props.name}</td>
          <td class="coinPrice">{this.props.price}</td>
          <td>{this.props.change1h}%</td>
          <td>{this.props.change24h}%</td>
          <td>{this.props.change7d}%</td>
        </tr>
    );
  }
}

export default Coin;
