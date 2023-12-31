import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './section.css';

import InfoForum from "../InforForum/infoforum";
import VariableForum from '../VariableForum/variableForum';

const SectionCard = ({
  imageSrc,
  topic,
  description,
  buttonText,
  type,
  variables,
  align,
  onClick,
  onOperateButtonClick,
  children,
}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = async () => {
    setIsContentVisible(!isContentVisible);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="section-card">
      <div className="section-content">
        <div className="header">
          {align === 'left' ? (
            <>
              <img src={imageSrc} alt="Vector Image" className="vector-image" />
              <div className="header-content">
                <div className='section-topic'>{topic}</div>
                <div className='section-des'>{description}</div>
              </div>
              <button className='section-button' onClick={toggleContentVisibility}>{buttonText}</button>
            </>
          ) : (
            <>
              <div className="header-content">
                <div className='section-topic'>{topic}</div>
                <div className='section-des'>{description}</div>
              </div>
              <button className='section-button' onClick={toggleContentVisibility}>{buttonText}</button>
              <img src={imageSrc} alt="Vector Image" className="vector-image" />
            </>
          )}
        </div>
        <div className={`content ${isContentVisible ? 'visible' : 'hidden'}`}>
          <div className="section-inner">
            {type === 'var' ? (
              <VariableForum variables={variables} onOperateButtonClick={onOperateButtonClick} />
            ) : (
              variables.length !== 0 ?
                variables.map((variable, index) => (
                  <InfoForum variables={variable} key={index} />
                )) :
                console.log("No data")
            )}


            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

SectionCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(['var', 'info']),
  variables: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  onClick: PropTypes.func,
  onOperateButtonClick: PropTypes.func,
  children: PropTypes.node,
};

export default SectionCard;
