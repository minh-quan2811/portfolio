// Project card component for the projects grid
import React from 'react';
import '../../styles/components.css';

const ProjectCard = ({
  number,
  title,
  description,
  stack,
  year,
  topColor = 'red',
}) => {
  const topColorClass = {
    red: '',
    blue: 'blue-top',
    green: 'green-top',
  }[topColor] || '';

  return (
    <div className="project-card">
      <div className={`project-card-top ${topColorClass}`}>
        <span className="project-num">{number}</span>
        <span style={{
          fontFamily: 'Noto Serif JP, serif',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.8)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
        }}>
          {`ARC ${number.padStart(2, '0')} · ${year}`}
        </span>
      </div>
      <div className="project-card-body">
        <div className="project-title">{title}</div>
        <p className="project-desc">{description}</p>
        <div className="project-stack">{stack}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
