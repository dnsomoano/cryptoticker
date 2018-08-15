import React, { Component } from "react";

class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ""
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
    return (
      // this.state.coinArray.map((coins, index) =>) TODO
    );
  }
}

export default CoinList;
