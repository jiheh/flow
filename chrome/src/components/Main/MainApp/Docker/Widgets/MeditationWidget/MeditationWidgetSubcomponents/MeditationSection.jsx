import React from 'react';

// import Line from '../../WidgetComponents/Line.jsx';
import '../../Widgets.scss';
import '../MeditationWidget.scss';

const MeditationSection = ({  }) => (
  <div className="meditation-section section">
    <h4>GUIDED MEDITATIONS</h4>

    <div className="grid">
      <div className="grid-item">
        <h4 className="grid-item-title">
          Breathing Space
        </h4>
        <p className="grid-item-description">
          3 min
        </p>
      </div>
    </div>
  </div>
);

export default MeditationSection ;
