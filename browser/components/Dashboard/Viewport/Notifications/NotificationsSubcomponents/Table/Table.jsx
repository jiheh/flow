import React from 'react';

import './Table.scss';
import TableRow from './TableRow.jsx';

const variables = [
  {
    name: "Title",
    id: "title",
  },
  {
    name: "Message",
    id: "contents",
  },
]

export default ({ notifications, toggleExistingNotificationEditor, searchInput }) => (
  <table className="survey-table">
    <tbody>
      <tr className="table-header">
        {variables.map((variable, index1) => (
          <th className="table-th" key={index1}>{variable.name}</th>
        ))}
      </tr>
      {
        notifications && notifications
          .filter(notification => notification.title.toLowerCase().includes(searchInput)
                    || notification.contents.toLowerCase().includes(searchInput))
          .map((notification, index2) => (
          <TableRow
            key={index2}
            clickHandler={(channelID) => toggleExistingNotificationEditor(channelID)}
            variables={variables}
            notification={notification} />
        ))
      }
    </tbody>

  </table>
);