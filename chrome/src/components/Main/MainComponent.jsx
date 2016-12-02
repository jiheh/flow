import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';

import { propTypes as settingsPropTypes } from '../../reducers/settings';
import { propTypes as userPropTypes } from '../../reducers/user';
import Main from './Main.jsx';
import { initialState as defaultSettings } from '../../reducers/settings';

import './Main.scss';

class MainComponent extends Component {
  static propTypes = {
    user: userPropTypes,
  };

  render() {
    const { user } = this.props;

    return (
      <Motion defaultStyle={{opacity:0}} style={{opacity: spring(1)}}>
        {
          interpolatingStyle => (
              <Main
                interpolatingStyle={interpolatingStyle}
                user={user}
              />
          )

        }
      </Motion>
    );
  }
}

export default MainComponent;
