import React, { Component } from "react";

class CurrentPrice extends Component {
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
          const coinArray = Object.values(newCryptoData.data);
          coinArray.map(index =>
            this.setState({
              price: coinArray[index].quotes.USD.price
            })
          );
        });
      // const coinsMapped = coinArray.map();
      // debug messages
      // console.log(coinArray);
      // console.log(coinArray[0].quotes.USD.price);
      //
      // for (let i = 0; i < coinArray.length; i++) {
      //   console.log(coinArray[i].quotes.USD.price);
      //   let coins = coinArray[i].quotes.USD.price;
      //   return coins;
      // }
    }, 2000);
    // }, 2000);
  }
  render() {
    return (
      <div className="coin-results">
        The price of {this.state.name} is {this.state.price}
      </div>
    );
  }
}

export default CurrentPrice;
