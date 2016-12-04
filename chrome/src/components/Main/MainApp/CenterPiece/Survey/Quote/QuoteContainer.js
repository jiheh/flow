import { connect } from 'react-redux';
import axios from 'axios';
import { setQuote } from '../../../../../../reducers/quote';
import { setAuthor } from '../../../../../../reducers/author';
import stockQuotes from './StockQuotes';
import Chance from 'chance';
const chance = new Chance();

import QuoteComponent from './QuoteComponent.jsx';

const mapStateToProps = ({
  settings,
  quote,
  author,
}) => ({
  heartClassName: settings.heartClassName,
  quote,
  author,
});


const mapDispatchToProps = () => dispatch => ({
  // gets random quote from server
  getQuote: () => {
    console.log("Getting quote")
    if (navigator.onLine) {
      console.log("in the if")
      // TODO: CHANGE TO PRODUCTION SERVER
      axios.get(`http://localhost:8080/api/quotes/random`)
        .then(res => {
          dispatch(setQuote(res.data.quote));
          dispatch(setAuthor(res.data.author));
        })
        // TODO: error handling
        .catch(console.error);
    } else {
      console.log("in the else")
      const quote = chance.pickone(stockQuotes);
      dispatch(setQuote(quote.quote));
      dispatch(setAuthor(quote.author));
    }


  },

  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);
