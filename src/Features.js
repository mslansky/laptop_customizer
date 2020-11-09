import React, { Component } from 'react';
import slugify from 'slugify';


class Features extends Component {
  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selected[feature].name}
              onChange={e => this.props.updateFeature(feature, item)}
            />
            <Label itemHash={itemHash} item={item} USCurrencyFormat={USCurrencyFormat} />
          </div>
        );
      });

      return (
        <Selectors featureHash={featureHash} feature={feature} options={options} />
      );
    });
  }
}



class Label extends Component {
  render() {
    return (
      <label htmlFor={this.props.itemHash} className="feature__label">
        {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
      </label>
    );
  }
}




class Selectors extends Component {
  render() {
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.props.options}
      </fieldset>);
  }
}






export default Features;
