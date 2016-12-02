import React from 'react';

import './Table.scss';

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

export default ({ surveys }) => (
  <table className="survey-table">

    <tbody>

      <tr className="table-header">
        {variables.map((variable, index1) => (
          <th className="table-th" key={index1}>{variable.name}</th>
        ))}
      </tr>

      {
        surveys.map((survey, index2) => (
          <tr className="table-row" key={index2}>
              {
                variables.map((variable, index3) => {

                  switch(variable) {
                    // different variables can be rendered differently
                    default:
                      return <td className="table-td" key={index3}>{survey[variable.id]}</td>;
                  }

                })
              }
          </tr>
        ))
      }

    </tbody>

  </table>
);