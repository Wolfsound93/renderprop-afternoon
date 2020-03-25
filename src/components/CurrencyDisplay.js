import React from 'react';

const CurrencyDisplay = props => (
  <p>
    US Dollar ${this.props.amount.toFixed(2)} - {this.props.val.name}{' '}
    {this.props.val.symbol}
    {(this.props.val.amount * this.props.val.rate).toFixed(2)}
  </p>
);

export default CurrencyDisplay;
