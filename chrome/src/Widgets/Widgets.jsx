import React, { PropTypes } from 'react';

import MeditationWidget from '../MeditationWidget/MeditationWidget.jsx';
import { propTypes } from '../reducers/meditationWidget';

let Widgets = ({ meditationWidget }) => (
  <div className="widgets">
    {meditationWidget.visible && <MeditationWidget />}
  </div>
);

Widgets.propTypes = propTypes;

export default Widgets;
