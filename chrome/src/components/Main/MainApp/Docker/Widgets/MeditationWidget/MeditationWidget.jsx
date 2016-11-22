import React from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';

const MeditationWidget = ({  }) => (
  <div className="meditation-widget widget">

    <h4 className="widget-title">
      Wellbeing
    </h4>

    <Line />

    <div className="widget-contents">

    </div>

  </div>
);

// MeditationWidget.propTypes = {
//   meditationWidget: propTypes,
// };

export default MeditationWidget;
