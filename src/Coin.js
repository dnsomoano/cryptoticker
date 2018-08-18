import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td class="coinId">{this.props.id}</td>
            <td class="coinName">{this.props.name}</td>
            <td class="coinIcon">
              <img
                src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${
                  this.props.id
                }.png`}
              />
            </td>
            <td class="coinPrice">{this.props.price}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Coin;
