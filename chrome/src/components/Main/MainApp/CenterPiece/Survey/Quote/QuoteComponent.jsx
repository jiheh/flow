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
  };

  constructor(props) {
    super(props)
    // this.fillHeart = this.fillHeart.bind(this);
  }

  componentDidMount() {
    this.props.getQuote();
  }

  fillHeart() {
    let heart = document.getElementById('heart');
    if (heart.className === 'heart') {
      heart.className = 'filledHeart';
      heart.src = require('./filledHeart.png');
    } else {
      heart.className = 'heart';
      heart.src = require('./heart.png');
    }
  }

  render() {
    const {
      quote,
      author,
    } = this.props;

    return (
      <Quote
        quote={quote}
        author={author}
        fillHeart={this.fillHeart}
  />
    );
  }
}

export default QuoteComponent;
