import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>{this.props.name}</td>
          <td><img src={"https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.icon}.png"} alt=""/></td>
          <td>{this.props.price}</td>
        </tr>
      </div>
    );
  }
}

export default Coin;
