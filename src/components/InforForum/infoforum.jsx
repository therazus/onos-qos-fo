import React, { useState } from 'react';
import './infoforum.css';

const InfoForum = ({ variables }) => {

  
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <>
      <div className="info-forum" onClick={toggleDropdown}>
        {isDropdownOpen ? (
          <div className='info-raw'>
            {variables.map(([infoName, infoData]) => (
              <div key={infoName} className="info-row open">
                <div className="left-variable">
                  <label>{infoName}:</label>
                </div>
                <div className="right-variable">
                  {infoData}
                </div>
              </div>
            ))}
          </div>
        ) : (
          variables.length > 0 && (
            <div className='info-raw'>
              <div className='info-row open'>
              <div className='left-drop'>
                {variables[0][0]}
              </div>
              <div className='right-drop'>
                {variables[0][1]}
              </div>
              </div>
            </div>

          )
        )}
      </div>
    </>
  );
};

export default InfoForum;
