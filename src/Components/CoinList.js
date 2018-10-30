import React, { Component } from "react";
import Coin from "./Coin";

class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial empty array
      coinArray: []
      // textColor: ""
    };
  }

  componentDidMount() {
    setInterval(() => {
      const _url = "https://api.coinmarketcap.com/v2/ticker/";
      fetch(_url)
        .then(resp => resp.json())
        .then(newCryptoData => {
          this.setState({
            coinArray: Object.values(newCryptoData.data)
          });

          // debug messages
          // console.log(this.state.coinArray.sort(this.state.coinArray.rank));
          // console.log(this.state.coinArray[0].quotes.USD.percent_change_1h);
        });
    }, 2500);
  }

  // // Compare price of previous state with new state
  // componentDidUpdate(prevState) {}

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
    // .sort(this.state.coinArray.rank);
  }
}

export default CoinList;
