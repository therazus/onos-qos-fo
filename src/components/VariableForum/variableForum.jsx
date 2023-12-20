import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './variableForum.css';

const VariableForum = ({ variables, onOperateButtonClick }) => {
  const [filledVariables, setFilledVariables] = useState({});

  const handleInputChange = (variableName, value) => {
    setFilledVariables((prevFilledVariables) => ({
      ...prevFilledVariables,
      [variableName]: value,
    }));
  };

  const handleOperateButtonClick = () => {
    console.log('Filled Variables:', filledVariables);
    // Pass the filledVariables to the parent component or perform any other action
    if (onOperateButtonClick) {
      onOperateButtonClick(filledVariables);
    }
  };

  return (
    <div className="variable-forum">
      {variables.map(([variableName, variableType]) => (
        <div key={variableName} className="variable-row">
          <div className="left-variable">
            <label>{variableName}:</label>
          </div>
          <div className="right-variable">
            {generateInputByType(variableName, variableType, handleInputChange)}
          </div>
        </div>
      ))}
      <button className="operate-button" onClick={handleOperateButtonClick}>
        Operate
      </button>
    </div>
  );
};

const generateInputByType = (variableName, type, onChange) => {
  switch (type) {
    case 'text':
      return (
        <input
          type="text"
          placeholder={`Enter ${variableName}`}
          onChange={(e) => onChange(variableName, e.target.value)}
        />
      );
    case 'integer':
      return (
        <input
          type="number"
          placeholder={`Enter ${variableName}`}
          onChange={(e) => onChange(variableName, parseInt(e.target.value, 10))}
        />
      );
    // Add more cases for other types if needed
    default:
      return null;
  }
};

VariableForum.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onOperateButtonClick: PropTypes.func,
};

export default VariableForum;
