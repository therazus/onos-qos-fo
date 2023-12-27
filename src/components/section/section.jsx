import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './section.css';
import {fetchData} from "../../services/onosServices"; // Import your stylesheet for styling

const SectionCard = ({ imageSrc, topic, description, buttonText, children, align }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
    fetchData();
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
                    {children}
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
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'right']),
};

export default SectionCard;
