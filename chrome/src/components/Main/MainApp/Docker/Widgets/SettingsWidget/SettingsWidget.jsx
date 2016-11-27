import React, { PropTypes } from 'react';

import Line from '../WidgetComponents/Line.jsx';
import './SettingsWidget.scss';
import '../Widgets.scss';

const SettingsWidget = ({
  logout,
}) => (
  <div className="settings-widget widget">

    <div className="widget-nav">
      <h4 className="widget-title">
        SETTINGS
      </h4>
    </div>

    <Line />

    <ul>
      <li className="logout" onClick={logout}>Logout</li>
    </ul>

  </div>
);

SettingsWidget.propTypes = {
  logout: PropTypes.func.isRequired,
};


export default SettingsWidget;
