import React, { PropTypes } from 'react';

import { propTypes } from '../reducers/meditationWidget';

const MeditationWidget = ({ meditationWidget }) => (
  <div className="meditation-widget">
    MEDITATION WIDGET
  </div>
);

MeditationWidget.propTypes = propTypes;

export default MeditationWidget;
