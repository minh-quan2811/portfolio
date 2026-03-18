// Reusable skill tag component with color variants
import React from 'react';
import '../../styles/components.css';

const SkillTag = ({ label, variant = 'default', onClick }) => {
  const variantClass = {
    default: '',
    red: 'red',
    blue: 'blue',
    green: 'green',
  }[variant] || '';

  return (
    <span 
      className={`skill-tag ${variantClass}`}
      onClick={onClick}
      role={onClick ? 'button' : 'presentation'}
      tabIndex={onClick ? 0 : -1}
    >
      {label}
    </span>
  );
};

export default SkillTag;
