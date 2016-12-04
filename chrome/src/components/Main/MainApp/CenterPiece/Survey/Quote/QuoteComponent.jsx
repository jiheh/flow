import React, { Component, PropTypes } from 'react';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';
import { propTypes as authorPropTypes } from '../../../../../../reducers/author';
import Quote from './Quote.jsx';
import filledHeart from './filledHeart.png';

class QuoteComponent extends Component {
  static propTypes = {
    getQuote: PropTypes.func.isRequired,
    quote: quotePropTypes,
    author: authorPropTypes,
    saveSettings: PropTypes.func,
  };

  componentDidMount() {
    this.props.getQuote();
  }

  fillHeart(settings, saveSettings) {
    let heart = document.getElementById('heart');
    if (heart.className === 'heart') {
      heart.className = 'filledHeart';
      heart.src = require('./filledHeart.png');
      saveSettings(
        {...settings,
          heartClassName: 'filledHeart',
        }
      );
    } else {
      heart.className = 'heart';
      heart.src = require('./heart.png');
      saveSettings(
        {...settings,
          heartClassName: 'heart',
        }
      );
    }

  }

  render() {
    const {
      heartClassName,
      quote,
      author,
      settings,
      saveSettings,
    } = this.props;

    return (
      <Quote
        quote={quote}
        author={author}
        fillHeart={this.fillHeart}
        heartClassName={heartClassName}
        settings={settings}
        saveSettings={saveSettings}
  />
    );
  }
}

export default QuoteComponent;
