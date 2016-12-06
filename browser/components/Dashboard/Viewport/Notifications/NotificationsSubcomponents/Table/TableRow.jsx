import React from 'react';
import './Table.scss';

export default ({ notification, variables, clickHandler }) => (

  <tr className="table-row" onClick={() => clickHandler(notification.id)}>
    {
      variables.map((variable, index3) => {

        switch(variable.name) {
          // different variables can be rendered differently
          case 'Status':
            return <td className="table-td" key={index3}>{notification[variable.id] ? 'Active' : 'Inactive'}</td>;
          default:
            // standard text output
            return <td className="table-td" key={index3}>{notification[variable.id]}</td>;
        }

      })
    }
  </tr>
);





