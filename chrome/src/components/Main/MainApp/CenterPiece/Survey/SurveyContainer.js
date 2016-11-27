import { connect } from 'react-redux';
import Survey from './Survey.jsx';

import _ from 'lodash';

const mapStateToProps = ({
  surveys,
}) => ({
  surveyQuestions: surveys.reduce((agg, survey) => {
    return [...agg, _.flatten(survey.questions)];
  }, []),
  surveyIds: surveys.reduce((agg, survey) => {
    return [...agg, survey.id];
  }, []),
});

export default connect(mapStateToProps, null)(Survey);
