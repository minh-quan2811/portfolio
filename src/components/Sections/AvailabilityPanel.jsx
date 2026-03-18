// Availability panel component - shows open to work status
import React from 'react';
import '../../styles/sections.css';

const AvailabilityPanel = ({ isAvailable = true, location = 'Da Nang, Vietnam', remote = true }) => {
  return (
    <div className="panel panel-avail">
      <div className="avail-dot-row">
        <div className="avail-live-dot"></div>
        <div className="big-text">
          {isAvailable ? 'OPEN TO WORK!' : 'BUSY'}
        </div>
      </div>
      <div className="small-text">
        {location} {remote && '· Remote OK'}
      </div>
      <div className="badge">RECRUIT ME</div>
    </div>
  );
};

export default AvailabilityPanel;
