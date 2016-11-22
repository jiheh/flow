import React, { PropTypes } from 'react';
import './Quote.scss';

import { propTypes as quotePropTypes } from '../../../../../../reducers/quote';

const Quote = ({ quote }) => (
  <h2 className="quote">{quote}</h2>
);

Quote.propTypes = {
  quote: quotePropTypes,
};

export default Quote;
