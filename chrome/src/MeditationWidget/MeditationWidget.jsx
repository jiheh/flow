import React from 'react';

import { propTypes } from '../reducers/meditationWidget';

const MeditationWidget = ({ meditationWidget }) => (
  <div className="meditation-widget">
    MEDITATION WIDGET
  </div>
);

MeditationWidget.propTypes = {
  meditationWidget: propTypes,
};

export default MeditationWidget;
