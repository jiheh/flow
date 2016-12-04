import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

import _ from 'lodash';

const initialState = [];

export const propTypes = PropTypes.arrayOf(PropTypes.shape({
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}));

export const TOGGLE_FAVORITE_QUOTE = 'TOGGLE_FAVORITE_QUOTE';
export const toggleFavoriteQuote = createAction(TOGGLE_FAVORITE_QUOTE);

export default handleActions({
  TOGGLE_FAVORITE_QUOTE: (state, { payload }) => {
    const { quote, author } = payload;

    const foundQuote = _.find(state, q => q.quote === quote && q.author === author);

    if (foundQuote) {
      return state.filter(q => q !== foundQuote);
    }

    return [...state, payload];
  },
}, initialState);
