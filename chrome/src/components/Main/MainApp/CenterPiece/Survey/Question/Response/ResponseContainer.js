import { connect } from 'react-redux';

import Response from './Response.jsx';
import axios from 'axios';
import { removeQuestion } from '../../../../../../../reducers/surveys';
import store from '../../../../../../../store.js';
import api from '../../../../../../../api.js';

const mapDispatchToProps = () => dispatch => ({
  sendResponse: ({ surveyId, questionId, value }) => {
    dispatch(removeQuestion({ surveyId, questionId }));
    axios.post(`${api}responses/chrome`, {
      questionId,
      value,
      hash: store.getState().user.hash,
    });
  }
});

export default connect(null, mapDispatchToProps)(Response);
