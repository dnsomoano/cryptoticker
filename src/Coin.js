import React, { Component } from "react";

class Coin extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     colorText: this.props.textColor
  //   };
  // }

  // componentDidMount() {
  //   // this.state.coinArray.forEach(coin => {
  //   if (parseFloat(this.props.change_1h) > -0.001) {
  //     console.log("It works");
  //     this.setState({
  //       colorText: "green"
  //     });
  //   } else {
  //     console.assert(true, this.props.change1h > -0.001);
  //     console.log(
  //       "this coin value is " +
  //         this.props.change_1h +
  //         "and it is a" +
  //         typeof this.props.change_1h
  //     );
  //     console.log("defaults to red");
  //     this.setState({
  //       colorText: "red"
  //     });
  //   }
  //   // });
  // }

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
        <td style={{ color: `${this.props.textColor}` }}>
          {this.props.change1h}
        </td>
        <td className="coin-change-24h">{this.props.change24h}%</td>
        <td className="coin-change-7d">{this.props.change7d}%</td>
      </tr>
    );
  }
}

export default Coin;
