import React from 'react';
import FlowIntroduction from './FlowSubcomponents/FlowIntroduction.jsx';
import Flows from './FlowSubcomponents/Flows.jsx';
import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';

const FlowsWidget = ({  }) => (
  <div className="flows-widget widget">

    <div className="widget-nav">
      <h4 className="widget-title">
        FLOW
      </h4>
    </div>

    <Line />

    <div className="widget-contents">
      <FlowIntroduction />
      <Flows />
    </div>

  </div>
);

// MeditationWidget.propTypes = {
//   meditationWidget: propTypes,
// };

export default FlowsWidget;
