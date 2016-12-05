import React, { Component, PropTypes } from 'react';
import Organization from './Organization.jsx';

class OrganizationComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h3>Organization</h3>
          <Organization organization={this.props.organization} />
         </div>
      </div>
    );
  }
}


export default OrganizationComponent;
