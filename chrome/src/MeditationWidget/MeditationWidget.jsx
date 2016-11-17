import React, { PropTypes } from 'react';

const MeditationWidget = ({ meditationWidget }) => (
  <div className="meditation-widget">
    MEDITATION WIDGET
  </div>
);

MeditationWidget.propTypes = {
  meditationWidget: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
  }),
};

export default MeditationWidget;
