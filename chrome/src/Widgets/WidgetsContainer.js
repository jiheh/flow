import { connect } from 'react-redux';

import Widgets from './Widgets.jsx';

const mapStateToProps = ({
  meditationWidget,
}) => ({
  meditationWidget,
});

export default connect(mapStateToProps)(Widgets);
