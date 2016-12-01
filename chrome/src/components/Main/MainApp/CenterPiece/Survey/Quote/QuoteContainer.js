import { connect } from 'react-redux';
import axios from 'axios';
import { setQuote } from '../../../../../../reducers/quote';
import { setAuthor } from '../../../../../../reducers/author';

import QuoteComponent from './QuoteComponent.jsx';

const mapStateToProps = ({
  quote,
  author,
}) => ({
  quote,
  author,
});


const mapDispatchToProps = () => dispatch => ({
  // gets random quote from server
  getQuote: () => {
    // TODO: CHANGE TO PRODUCTION SERVER
    axios.get(`http://localhost:8080/api/quotes/random`)
      .then(res => {
        dispatch(setQuote(res.data.quote));
        dispatch(setAuthor(res.data.author));
      })
    // TODO: error handling
      .catch(console.error);
  },

  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);
