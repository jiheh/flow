import { connect } from 'react-redux';
import Question from './Question.jsx';

const mapStateToProps = ({ surveys }) => ({
  surveys
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Question);
