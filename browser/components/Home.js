import React from 'react';

// TEMPORARY - TESTING
import axios from 'axios';

export default () => (
  <div className="home">
    <div className="banner text-center text-inverted">
      <h1>flow</h1>
      <h1><small>This is the home component</small></h1>
      {/* TESTING ANNOUNCEMENTS */}
      <button onClick={
        () => {
          axios.post('/api/announcements', {
            channelIds: [3],
            title: 'TITLE',
            content: 'CONTENT',
          })
            .then(() => console.log('POSTED TEST ANNOUNCEMENT'))
            .catch(console.error);
        }
                      }>
              POST TEST ANNOUNCEMENT
      </button>
    </div>
  </div>
);
