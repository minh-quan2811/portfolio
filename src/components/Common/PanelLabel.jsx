// Common component for section labels with One Piece styling
import React from 'react';
import '../../styles/components.css';

const PanelLabel = ({ children, jpText, className = '' }) => {
  return (
    <div className={`panel-label ${className}`}>
      <span>{children}</span>
      {jpText && <span className="label-jp">{jpText}</span>}
    </div>
  );
};

export default PanelLabel;
