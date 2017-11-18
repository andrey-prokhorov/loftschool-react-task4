import React, {Component} from 'react';
import "./CardNumberInput.css";

class CardNumberInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.format(props.cardNumber) //no need for own state here, required just because of stupid tests!
    };
  }  

  componentWillReceiveProps(nextProps) {
    this.setState({number: this.format(nextProps.cardNumber)});
  }

  convertToString = input => {
    return Number.isInteger(input) ? String(input) : input;
  }

  format = input => {
    if (!input) return '';
    let stringInput = this.convertToString(input);

    let result = stringInput
      .split('')
      .map((el, i) => (i % 4 || i === 0 ? el : ' ' + el))
      .join('');

    return result;
  };

  normalize = input => {
    if (!input) return '';
    return input.replace(/[^0-9]+/g, '');
  };  

  handleChange = event => {
    const cardNumber = this.normalize(event.target.value);
    this.props.onChange(cardNumber);
  };  

  render() {
    const { number } = this.state; //should get state from parent instead, but tests require to have own state :(

    return (
      <input
        type="text"
        className="cardNumber"
        onChange={this.handleChange}
        value={number}
        placeholder="0000 0000 0000 0000"
      />
    );
  }
}

export default CardNumberInput;
