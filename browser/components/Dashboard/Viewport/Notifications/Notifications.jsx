import React from 'react';
import Table from './NotificationsSubcomponents/Table/Table.jsx';
import { Dialog } from '@blueprintjs/core';

import NewNotificationForm from './NotificationsSubcomponents/NewNotificationForm/NewNotificationForm.jsx';
import ExistingNotificationEditor from './NotificationsSubcomponents/ExistingNotificationEditor/ExistingNotificationEditor.jsx';

const Notifications = ({ currentChannelID, currentNotificationID, notifications, showModal, modalType, toggleNewNotificationForm, toggleExistingNotificationEditor, submitNotification, searchInput }) => (
  <div className="notifications">
  	<div className="pt-card">
    	<Table notifications={notifications} toggleExistingNotificationEditor={toggleExistingNotificationEditor} searchInput={searchInput} />
	</div>

    <Dialog
              style={{backgroundColor: 'white'}}
              isOpen={showModal}
              inline={false}
              autoFocus={true}
              canOutsideClickClose={false}
              canEscapeKeyClose={false}
              onClose={() => toggleNewNotificationForm()}>
        {
          modalType === 'new_notification'
            ? <NewNotificationForm
            toggleNewNotificationForm={toggleNewNotificationForm}
            currentChannelID={currentChannelID}
            submitNotification={submitNotification} />
            : null
        }
        {
          modalType === 'existing_notification'
            ? <ExistingNotificationEditor
                  notificationID={currentNotificationID}
                  toggleExistingNotificationEditor={toggleExistingNotificationEditor}/>
            : null
        }

    </Dialog>	
  </div>
);

export default Notifications;
