import React, { Component } from 'react';
import slugify from 'slugify';
import Selectors from './Selectors.js'
import FEATURES from './Store.js';
import Label from './Label.js';


class Features extends Component {
  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
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
        <Selectors key={featureHash} featureHash={featureHash} feature={feature} options={options} />
      );
    });
  }
}



export default Features;
