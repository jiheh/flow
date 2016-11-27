import { connect } from 'react-redux';
import Survey from './Survey.jsx';

import _ from 'lodash';

const mapStateToProps = ({
  surveys,
}) => ({
  surveyQuestions: (surveys && surveys.length > 0 && surveys[0].questions) || [],
  surveyId: (surveys && surveys.length > 0 && surveys[0].id) || -1,
});

export default connect(mapStateToProps, null)(Survey);
