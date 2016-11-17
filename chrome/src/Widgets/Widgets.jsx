import React, { PropTypes } from 'react';
import MeditationWidget from '../MeditationWidget/MeditationWidget.jsx';

const Widgets = ({ meditationWidget }) => (
  <div className="widgets">
    {meditationWidget.visible && <MeditationWidget />}
  </div>
);

Widgets.propTypes = {
  meditationWidget: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
  }),
};

export default Widgets;
