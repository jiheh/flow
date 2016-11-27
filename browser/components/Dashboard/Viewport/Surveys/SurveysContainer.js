import { connect } from 'react-redux';
import SurveysComponent from './SurveysComponent';

const mapStateToProps = ({channels}) => ({
	currentChannel: channels.currentChannel
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SurveysComponent);