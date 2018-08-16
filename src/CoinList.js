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
      const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=20";
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
    }, 2000);
  }
  render() {
    return this.state.coinArray.map((coins, index) => {
      return (
        <Coin
          key={index}
          id={coins.id}
          name={coins.name}
          price={coins.quotes.USD.price}
        />
      );
    });
  }
}

export default CoinList;
