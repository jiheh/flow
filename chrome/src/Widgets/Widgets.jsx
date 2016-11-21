import React, { PropTypes } from 'react';

import MeditationWidget from '../MeditationWidget/MeditationWidget.jsx';
import { propTypes } from '../reducers/meditationWidget';

const Widgets = ({ meditationWidget }) => (
  <div className="widgets">
    {meditationWidget.visible && <MeditationWidget />}
  </div>
);

Widgets.propTypes = {
  meditationWidget: propTypes,
};

export default Widgets;
