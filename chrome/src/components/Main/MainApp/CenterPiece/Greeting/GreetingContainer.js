import { connect } from 'react-redux';
import Greeting from './Greeting.jsx';

const mapStateToProps = ({
  settings,
}) => ({
  name: "Clement",
});

export default connect(mapStateToProps, null)(Greeting);
