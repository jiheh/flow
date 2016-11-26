import { connect } from 'react-redux';
import Greeting from './GreetingComponent.jsx';

const mapStateToProps = ({
  user,
}) => ({
  name: user.name,
});

export default connect(mapStateToProps, null)(Greeting);
