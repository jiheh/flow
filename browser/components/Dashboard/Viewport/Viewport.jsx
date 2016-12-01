import React from 'react';
import './Viewport.scss';
import ChannelHeaderContainer from './ChannelHeader/ChannelHeaderContainer';
import SurveysContainer from './Surveys/SurveysContainer';
import MembersContainer from './Members/MembersContainer';

import {Tab, Tabs, TabList, TabPanel, } from '@blueprintjs/core';

export default ({ currentChannel }) => (
  <div className="viewport">

    {currentChannel.id &&
    
    <div>
      <ChannelHeaderContainer />

      <div className="viewport-content">

        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Surveys</Tab>
            <Tab>Notifications</Tab>
            <Tab>Members</Tab>
            <Tab>Settings</Tab>
          </TabList>

          <TabPanel>
            <h3>Overview</h3>
          </TabPanel>

          <TabPanel>
            <SurveysContainer />
          </TabPanel>

          <TabPanel>
            <div/>
          </TabPanel>

          <TabPanel>
            <MembersContainer />
          </TabPanel>

          <TabPanel>
            <h3>Settings</h3>

          </TabPanel>
        </Tabs>

      </div>
    </div>
    }

  </div>
);
