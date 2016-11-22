import { connect } from 'react-redux';
import Greeting from './Greeting.jsx';

const mapStateToProps = ({
  settings,
}) => ({
  name: "Chuhan",
});

export default connect(mapStateToProps, null)(Greeting);
