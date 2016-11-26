import React from 'react';
import './Viewport.scss';
import ChannelHeaderContainer from './ChannelHeader/ChannelHeaderContainer.js';

import {Tab, Tabs, TabList, TabPanel, } from '@blueprintjs/core';

export default () => (
  <div className="viewport">

    <ChannelHeaderContainer />

    <div className="viewport-content">

      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Surveys</Tab>
          <Tab>Members</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanel>
          <h3>Overview</h3>

        </TabPanel>

        <TabPanel>
          <h3>Surveys</h3>

        </TabPanel>

        <TabPanel>
          <h3>Members</h3>

        </TabPanel>

        <TabPanel>
          <h3>Settings</h3>

        </TabPanel>
      </Tabs>

    </div>
  </div>
);