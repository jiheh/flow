import React from 'react';
import { Spinner } from '@blueprintjs/core';

const AddChannelPopover = ({
  onSubmit,
  showSpinner,
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <div style={{ textAlign: 'center' }}>
        <h5>Create a new channel</h5>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          type="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          name="description"
          type="description"
          className="form-control"
        />
      </div>
      {showSpinner ? <Spinner className="pt-small" />
      : <button className="pt-button pt-intent-primary pt-fill" type="submit">
          Submit
        </button>}
    </form>
  </div>
);

export default AddChannelPopover;
