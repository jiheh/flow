import { connect } from 'react-redux';
import axios from 'axios';
import { setQuote } from '../../../../../../reducers/quote';

import QuoteComponent from './QuoteComponent.jsx';

const mapStateToProps = ({
  quote,
}) => ({
  quote,
  author: "Anonymous",
});


const mapDispatchToProps = () => dispatch => ({
  getQuote: () => {
    // TODO: CHANGE TO PRODUCTION SERVER
    axios.get('http://localhost:8080/api/quotes/random')
      .then(res => dispatch(setQuote(res.data)))
    // TODO: error handling
      .catch(console.error);
  },

  saveSettings: (settings) => {
    dispatch(setSettings(settings));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);
