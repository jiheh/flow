import React, { PropTypes } from 'react';
import './Quote.scss';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';

const Quote = ({ quote, author }) => (
  <div className = "quote">
    <span className="quote-text">
      "{quote}"
    </span>
    <span className="quote-origin">
      - {author}
    </span>
  </div>

);

Quote.propTypes = {
  quote: quotePropTypes,
};

export default Quote;
