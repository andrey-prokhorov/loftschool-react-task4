import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  state = { cardNumber: "" };
  static displayName = "Card Number Input";

  handleChange = cardNumber => {
    this.setState({ cardNumber });
  };

  render() {
    return (
      <div>
        <CardNumberInput
          onChange={this.handleChange}
          cardNumber={this.state.cardNumber}
        />
      </div>
    );
  }
}

export default CardNumberHolder;
