import React, { PropTypes } from 'react';
import heart from './heart.png';
import filledHeart from './filledHeart.png';
import './Quote.scss';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';
import { propTypes as authorPropTypes } from '../../../../../../reducers/author';
import { propTypes as favoriteQuotesPropTypes } from '../../../../../../reducers/favoriteQuotes';

import _ from 'lodash';

const Quote = ({
  quote,
  author,
  fillHeart,
  heartClassName,
  settings,
  saveSettings,
  favoriteQuotes,
  toggleFavorite,
  isFavorited,
}) => (
  <div className = "quote">
    <span className="quote-text">
      "{quote}"
    </span>
    <span className="quote-origin">
      {author}
      <img
          id="heart"
          onClick={() => toggleFavorite(quote, author)}
          className={`heart ${isFavorited(quote, author) ? 'filledHeart' : ''}`}
          src={isFavorited(quote, author) ? filledHeart : heart}></img>
    </span>
  </div>

);

Quote.propTypes = {
  quote: quotePropTypes,
  author: authorPropTypes,
  favoriteQuotes: favoriteQuotesPropTypes.isRequired,
  isFavorited: PropTypes.func.isRequired,
};

export default Quote;
