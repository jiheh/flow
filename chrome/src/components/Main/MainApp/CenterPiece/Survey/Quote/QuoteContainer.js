/* global navigator */
import { connect } from 'react-redux';
import axios from 'axios';
import { setQuote } from '../../../../../../reducers/quote';
import { setAuthor } from '../../../../../../reducers/author';
import { setSettings } from '../../../../../../reducers/settings';
import stockQuotes from './StockQuotes';
import Chance from 'chance';
const chance = new Chance();

import QuoteComponent from './QuoteComponent.jsx';

import { toggleFavoriteQuote } from '../../../../../../reducers/favoriteQuotes';

import server from '../../../../../../server.js';

const mapStateToProps = ({
  settings,
  quote,
  author,
  favoriteQuotes,
}) => ({
  heartClassName: settings.heartClassName,
  quote,
  author,
  settings,
  favoriteQuotes,
});


const mapDispatchToProps = () => dispatch => ({
  // gets random quote from server
  getQuote: () => {
    if (navigator.onLine) {
      axios.get(`${server}api/quotes/random`)
        .then(res => {
          dispatch(setQuote(res.data.quote));
          dispatch(setAuthor(res.data.author));
        })
        // TODO: error handling
        .catch(console.error);
    } else {
      const quote = chance.pickone(stockQuotes);
      dispatch(setQuote(quote.quote));
      dispatch(setAuthor(quote.author));
    }


  },

  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

  toggleFavorite: (quote, author) => {
    dispatch(toggleFavoriteQuote({quote, author}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);
