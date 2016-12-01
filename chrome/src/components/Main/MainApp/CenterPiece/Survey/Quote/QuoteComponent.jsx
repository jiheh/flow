import React, { Component, PropTypes } from 'react';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';
import { propTypes as authorPropTypes } from '../../../../../../reducers/author';
import Quote from './Quote.jsx';

class QuoteComponent extends Component {
  static propTypes = {
    getQuote: PropTypes.func.isRequired,
    quote: quotePropTypes,
    author: authorPropTypes,
  };

  componentDidMount() {
    this.props.getQuote();
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
  />
    );
  }
}

export default QuoteComponent;
