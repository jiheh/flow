import React, { Component, PropTypes } from 'react';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';
import { propTypes as authorPropTypes } from '../../../../../../reducers/author';
import Quote from './Quote.jsx';

import _ from 'lodash';


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

  isFavorited = (quote, author) => _.find(this.props.favoriteQuotes, q => q.quote === this.props.quote && q.author === this.props.author)

  render() {
    const {
      heartClassName,
      quote,
      author,
      settings,
      saveSettings,
      favoriteQuotes,
      toggleFavorite,
    } = this.props;

    return (
      <Quote
        quote={quote}
        author={author}
        settings={settings}
        saveSettings={saveSettings}
        favoriteQuotes={favoriteQuotes}
        toggleFavorite={toggleFavorite}
        isFavorited={this.isFavorited}
      />
    );
  }
}

export default QuoteComponent;
