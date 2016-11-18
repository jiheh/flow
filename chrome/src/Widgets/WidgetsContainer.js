import { connect } from 'react-redux';

import Widgets from './Widgets.jsx';

let mapStateToProps = ({
  meditationWidget,
}) => ({
  meditationWidget,
});

export default connect(mapStateToProps)(Widgets);
