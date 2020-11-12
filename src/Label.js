import React, { Component } from 'react';


class Label extends Component {
  render() {
    return (
      <label htmlFor={this.props.itemHash} className="feature__label">
        {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
      </label>
    );
  }
}


export default Label 