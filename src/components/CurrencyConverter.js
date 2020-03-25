import React, { Component } from 'react';
import CurrencyDisplay from './CurrencyDisplay';

class CurrencyConverter extends Component {
  state = {
    currencyChosen: false,
    selectedCurrency: 'Select Currency',
    amount: 0
  };

  handleIncreaseAmount = () => {
    this.setState(prevState => {
      return {
        amount: prevState.amount + 1
      };
    });
  };

  handleDecreaseAmount = () => {
    this.state.amount > 0 &&
      this.setState(prevState => {
        return {
          amount: prevState.amount - 1
        };
      });
  };

  handleSelectOption = e => {
    const userValue = e.target.value;
    this.setState(() => {
      return {
        selectedCurrency: userValue,
        currencyChosen: userValue === 'Select Currency' ? false : true
      };
    });
  };

  render() {
    const currencyData = [
      { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
      { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
      { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
      { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
      { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
    ];

    const currencyOptions = currencyData.map((val, index) => (
      <option key={val.id} value={index}>
        {val.name}
      </option>
    ));

    return (
      <div>
        <div>
          <button className='add' onClick={this.handleIncreaseAmount}>
            +
          </button>
          <button className='minus' onClick={this.handleDecreaseAmount}>
            -
          </button>
        </div>
        {this.props.render(
          currencyData[this.state.selectedCurrency],
          this.state.amount
        )}
        <select
          value={this.state.selectedCurrency}
          onChange={this.handleSelectOption}
        >
          <option value='Selected Currency'>Selected Currency</option>
          {currencyOptions}
        </select>

        {this.state.currencyChosen ? (
          this.props.render(
            currencyData[this.state.selectedCurrency],
            this.state.amount
          )
        ) : (
          <p>Please select currency</p>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
