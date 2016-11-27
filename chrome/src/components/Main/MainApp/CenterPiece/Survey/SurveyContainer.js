import { connect } from 'react-redux';
import Survey from './Survey.jsx';

import _ from 'lodash';

const mapStateToProps = ({
  settings,
  surveys,
}) => ({
  showQuote: settings.showQuote,
  surveyQuestions: surveys.reduce((agg, survey) => {
    return [...agg, _.flatten(survey.questions)];
  }, []),
});

export default connect(mapStateToProps, null)(Survey);
