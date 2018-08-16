import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>

        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td><img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.id}.png`} /></td>
          <td>{this.props.price}</td>
        </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Coin;
