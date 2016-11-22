import { connect } from 'react-redux';
import Greeting from './Greeting.jsx';

const mapStateToProps = ({
  user,
}) => ({
  name: user.name,
});

export default connect(mapStateToProps, null)(Greeting);
