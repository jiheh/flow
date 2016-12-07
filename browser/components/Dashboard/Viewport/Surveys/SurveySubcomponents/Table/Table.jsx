import React from 'react';

import './Table.scss';
import TableRow from './TableRow.jsx';

// active: boolean
// admin_id: integer
// channel_id: integer
// created_at: date
// description: text
// id: integer
// name: string
// owner_id: integer
// updated_at: date

const variables = [
  {
    name: "Name",
    id: "name",
  },
  {
    name: "Status",
    id: "active",
  },
  {
    name: "Created At",
    id: "created_at",
  },
  {
    name: "Updated At",
    id: "updated_at",
  },
]

export default ({ surveys, toggleExistingSurveyEditor, searchInput }) => (
  <table className="survey-table">

    <tbody>

      <tr className="table-header">
        {variables.map((variable, index1) => (
          <th className="table-th" key={index1}>{variable.name}</th>
        ))}
      </tr>

      {
        surveys && surveys
        .filter(survey => survey.name.toLowerCase().includes(searchInput)
          || survey.description.toLowerCase().includes(searchInput))
        .map((survey, index2) => (
          <TableRow
            key={index2}
            clickHandler={(channelID) => toggleExistingSurveyEditor(channelID)}
            variables={variables}
            survey={survey} />
        ))
      }

    </tbody>

  </table>
);