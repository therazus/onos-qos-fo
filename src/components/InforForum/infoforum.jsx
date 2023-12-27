import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './infoforum.css';

const InfoForum = ({ variables }) => {
  
  return (
    <div className="variable-forum">
      {variables.map(([infoName, infoData]) => (
        <div key={infoName} className="variable-row">
          <div className="left-variable">
            <label>{infoName}:</label>
          </div>
          <div className="right-variable">
            {infoData}
          </div>
        </div>
      ))}

      
      
    </div>
  );
};

export default InfoForum;
