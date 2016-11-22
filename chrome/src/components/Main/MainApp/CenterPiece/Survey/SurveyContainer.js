import { connect } from 'react-redux';
import Survey from './Survey.jsx';

const mapStateToProps = ({
  settings,
  surveyQuestions,
}) => ({
  showQuote: settings.showQuote,
  surveyQuestions: surveyQuestions
});

export default connect(mapStateToProps, null)(Survey);
