import React from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';

const ReflectionWidget = ({  }) => (
  <div className="reflection-widget widget">

    <div className="widget-nav">
      <h4 className="widget-title">
        REFLECTION
      </h4>
    </div>

    <Line />

    <div className="widget-contents">
    </div>

  </div>
);

// MeditationWidget.propTypes = {
//   meditationWidget: propTypes,
// };

export default ReflectionWidget;
