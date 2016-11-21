import { connect } from 'react-redux';
import CenterPiece from './CenterPiece.jsx';

const mapStateToProps = ({
  settings,
}) => ({
  showClock: settings.showClock,
});

export default connect(mapStateToProps, null)(CenterPiece);
