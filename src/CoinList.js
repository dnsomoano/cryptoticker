import React, { Component } from "react";
import Coin from "./Coin";

class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial empty array
      coinArray: []
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
        });
      // debug messages
      // console.log(coinArray);
      // console.log(coinArray[0].quotes.USD.price);
    }, 1000);
  }

  render() {
    return this.state.coinArray.map((coins, index) => {
      return (
        <Coin
          rank={coins.rank}
          name={coins.name}
          price={coins.quotes.USD.price}
          change1h={coins.quotes.USD.percent_change_1h}
          change24h={coins.quotes.USD.percent_change_24h}
          change7d={coins.quotes.USD.percent_change_7d}
          key={index}
        />
      );
    });
  }
}

export default CoinList;
