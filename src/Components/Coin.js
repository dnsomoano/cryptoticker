import React, { Component } from "react";
import "../Stylings/Coin.css";
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from "react-sparklines";

class Coin extends Component {
  render() {
    return (
      <tr>
        <td className="coin-rank">{this.props.rank}</td>
        {/* <td className="coin-icon">
          <img
            className="coin-icon-ico"
            src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${
              this.props.rank
            }.png`}
            alt={this.props.name}
          />
        </td> */}
        <td className="coin-name">
          <img
            className="coin-icon-ico"
            src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${
              this.props.rank
            }.png`}
            alt={this.props.name}
          />{" "}
          {this.props.name}
        </td>
        <td className="coin-price" style={{ color: `${this.props.textColor}` }}>
          {this.props.price}
        </td>
        <td className="coin-sparklines">
          <Sparklines
            data={[
              `${this.props.change7d}`,
              `${this.props.change24h}`,
              `${this.props.change1h}`
            ]}
          >
            <SparklinesLine color={this.props.textColor} />
            <SparklinesReferenceLine type="mean" />
            <SparklinesSpots />
          </Sparklines>
        </td>
        <td className="coin-change-1h">{this.props.change1h}</td>
        <td className="coin-change-24h">{this.props.change24h}</td>
        <td className="coin-change-7d">{this.props.change7d}</td>
      </tr>
    );
  }
}

export default Coin;
