import React from 'react';

import Line from '../WidgetComponents/Line.jsx';
import '../Widgets.scss';

import MeditationSection from './MeditationWidgetSubcomponents/MeditationSection.jsx';
import SoundSection from './MeditationWidgetSubcomponents/SoundSection.jsx';
import VisualSection from './MeditationWidgetSubcomponents/VisualSection.jsx';

const MeditationWidget = ({  }) => (
  <div className="meditation-widget widget">

    <div className="widget-nav">
      <h4 className="widget-title">
        WELLBEING & RELAXATION
      </h4>
    </div>

    <Line />

    <div className="widget-contents">
      <MeditationSection/>
      <SoundSection/>
      <VisualSection/>
    </div>

  </div>
);

export default MeditationWidget;
