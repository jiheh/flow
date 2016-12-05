import React from 'react';
import './Viewport.scss';
import ChannelHeaderContainer from './ChannelHeader/ChannelHeaderContainer';
import SurveysContainer from './Surveys/SurveysContainer';
import MembersContainer from './Members/MembersContainer';
import NotificationsContainer from './Notifications/NotificationsContainer'
import AdminsContainer from './Admins/AdminsContainer';

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
            <Tab>Admins</Tab>
          </TabList>

          <TabPanel>
            <h3>Overview</h3>
          </TabPanel>

          <TabPanel>
            <SurveysContainer />
          </TabPanel>

          <TabPanel>
            <NotificationsContainer />
          </TabPanel>

          <TabPanel>
            <MembersContainer />
          </TabPanel>

          <TabPanel>
            <AdminsContainer />
          </TabPanel>
        </Tabs>

      </div>
    </div>
    }

  </div>
);
