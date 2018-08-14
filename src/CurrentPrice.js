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
          console.log(coinArray);
          console.log(coinArray[0].quotes.USD.price);
          this.setState({
            price: coinArray
          });
          // for (let i = 0; i < coinArray.length; i++) {
          //   console.log(coinArray[i].quotes.USD.price);
          //   let coins = coinArray[i].quotes.USD.price;
          //   coins;
          // }
        });
    }, 10000);
  }
  render() {
    return (
      <div>
        The price of {this.name} is {this.state.price}
      </div>
    );
  }
}

export default CurrentPrice;
