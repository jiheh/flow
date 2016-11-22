import React, { Component, PropTypes } from 'react';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';
import Quote from './Quote.jsx';

class QuoteComponent extends Component {
  static propTypes = {
    getQuote: PropTypes.func.isRequired,
    quote: quotePropTypes,
  };

  componentDidMount() {
    this.props.getQuote();
  }

  render() {
    const {
      quote,
    } = this.props;

    return (
      <Quote quote={quote}/>
    );
  }
}

export default QuoteComponent;
