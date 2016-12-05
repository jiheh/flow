import React from 'react';
import './Viewport.scss';
import ChannelHeaderContainer from './ChannelHeader/ChannelHeaderContainer';
import SurveysContainer from './Surveys/SurveysContainer';
import MembersContainer from './Members/MembersContainer';
import NotificationsContainer from './Notifications/NotificationsContainer';
import AdminsContainer from './Admins/AdminsContainer';
import OrganizationContainer from './Organization/OrganizationContainer';

import {Tab, Tabs, TabList, TabPanel, } from '@blueprintjs/core';

export default ({ currentChannel }) => (
  <div className="viewport">

    {currentChannel.id &&

    <div>
      <ChannelHeaderContainer />

      <div className="viewport-content">

        <Tabs>
          <TabList>
            <Tab>Organization</Tab>
            <Tab>Surveys</Tab>
            <Tab>Notifications</Tab>
            <Tab>Members</Tab>
            <Tab>Admins</Tab>
          </TabList>

          <TabPanel>
            <OrganizationContainer />
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
