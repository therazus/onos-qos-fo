import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './infoforum.css';

const InfoForum = ({ variables }) => {
  
  return (
    <div className="info-forum">
      {variables.map(([infoName, infoData, value]) => (
        <div key={infoName} className="info-row">
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
