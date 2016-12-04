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

  constructor(props) {
    super(props)
    this.state = {
      kappa: 1
    }
    // this.fillHeart = this.fillHeart.bind(this);
  }

  componentDidMount() {
    // this.state.kappa = document.getElementById('heart').className;
    // console.log(this.state.kappa)
    this.props.getQuote();
  }

  fillHeart() {
    const { settings } = this.props;
    let heart = document.getElementById('heart');
    if (heart.className === 'heart') {
      heart.className = 'filledHeart';
      heart.src = require('./filledHeart.png');
      this.props.saveSettings(
        {...settings,
          heartClassName: 'filledHeart',
        }
      );
    } else {
      heart.className = 'heart';
      heart.src = require('./heart.png');
      this.props.saveSettings(
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
    } = this.props;
    console.log("habibi")
    console.log(heartClassName)
    return (
      <Quote
        quote={quote}
        author={author}
        fillHeart={this.fillHeart}
        heartClassName={this.heartClassName}
  />
    );
  }
}

export default QuoteComponent;
