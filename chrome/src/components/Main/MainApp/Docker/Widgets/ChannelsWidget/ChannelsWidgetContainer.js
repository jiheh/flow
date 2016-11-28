import { connect } from 'react-redux';
import ChannelsWidgetComponent from './ChannelsWidgetComponent.jsx';

const mapStateToProps = ({
  invites,
}) => ({
  invites,
});

const mapDispatchToProps = ({

}) => ({

});

export default connect(null, null)(ChannelsWidgetComponent);
