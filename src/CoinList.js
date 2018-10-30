import React, { Component } from "react";
import Coin from "./Coin";

class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial empty array
      coinArray: [],
      textColor: ""
    };
  }
  componentDidMount() {
    setInterval(() => {
      const _url = "https://api.coinmarketcap.com/v2/ticker/";
      // const increase = 0.01;
      // const decrease = -0.01;
      fetch(_url)
        .then(resp => resp.json())
        .then(newCryptoData => {
          this.setState({
            coinArray: Object.values(newCryptoData.data)
          });

          // debug messages
          // console.log(this.state.coinArray);
          // console.log(this.state.coinArray[0].quotes.USD.percent_change_1h);
          // console.log(
          //   "coin of " +
          //     coin.name +
          //     " price of" +
          //     coin.quotes.USD.percent_change_1h
          // );
        });
    }, 2500);
  }

  render() {
    return this.state.coinArray.map((coin, index) => {
      const color =
        coin.quotes.USD.percent_change_1h < 0.01 ? "darkred" : "green";
      return (
        <Coin
          rank={coin.rank}
          name={coin.name}
          price={coin.quotes.USD.price}
          change1h={coin.quotes.USD.percent_change_1h}
          change24h={coin.quotes.USD.percent_change_24h}
          change7d={coin.quotes.USD.percent_change_7d}
          textColor={color}
          key={index}
        />
      );
    });
  }
}

export default CoinList;
