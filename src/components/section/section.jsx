import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './section.css';

import InfoForum from "../InforForum/infoforum";
import VariableForum from '../VariableForum/variableForum';

const SectionCard = ({ imageSrc, topic, description, buttonText, type, variables, align, onClick }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = async () => {
      setIsContentVisible(!isContentVisible);
      const data = await onClick();

      if (type === 'info') {
          variables = data;
      }

  };

  return (
    <div className="section-card">
        <div className="section-content">
            <div className="header">
                {align === 'left' ? 
                <>
                <img src={imageSrc} alt="Vector Image" className="vector-image" />
                <div className="header-content">
                <div className='section-topic'>{topic}</div>
                <div className='section-des'>{description}</div>
                </div>
                <button className='section-button' onClick={toggleContentVisibility}>{buttonText}</button>
                </>
                :
                <>
                <div className="header-content">
                <div className='section-topic'>{topic}</div>
                <div className='section-des'>{description}</div>
                </div>
                <button className='section-button' onClick={toggleContentVisibility}>{buttonText}</button>
                <img src={imageSrc} alt="Vector Image" className="vector-image" />
    
                </>
                }
            </div>
            <div className={`content ${isContentVisible ? 'visible' : 'hidden'}`}>
                    
          <div className="section-inner">
            {type === 'var' ? <VariableForum variables={variables} onOperateButtonClick={onClick} /> : <InfoForum variables={variables} />}
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

};

export default SectionCard;
