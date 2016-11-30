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
  getQuote: (number) => {
    // TODO: CHANGE TO PRODUCTION SERVER
    axios.get(`http://localhost:8080/api/quotes/${number}`)
      .then(res => dispatch(setQuote(res.data)))
    // TODO: error handling
      .catch(console.error);
  },

  getAuthor: (number) => {
    // TODO: CHANGE TO PRODUCTION SERVER
    axios.get(`http://localhost:8080/api/authors/${number}`)
      .then(res => dispatch(setAuthor(res.data)))
    // TODO: error handling
      .catch(console.error);
  },

  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);
