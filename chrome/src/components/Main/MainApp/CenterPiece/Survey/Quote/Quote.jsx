import React, { PropTypes } from 'react';
import heart from './heart.png';
import './Quote.scss';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';
import { propTypes as authorPropTypes } from '../../../../../../reducers/author';

const Quote = ({ quote, author, fillHeart }) => (
  <div className = "quote">
    <span className="quote-text">
      "{quote}"
    </span>
    <span className="quote-origin">
      - {author}<img id="heart" onClick={() => fillHeart() } className="heart" src={heart}></img>
    </span>
  </div>

);

Quote.propTypes = {
  quote: quotePropTypes,
  author: authorPropTypes,
};

export default Quote;
