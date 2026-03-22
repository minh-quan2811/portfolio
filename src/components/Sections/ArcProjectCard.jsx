import React from 'react';
import '../../styles/projects.css';

const COLOR_CLASS = {
  r:  'arc-top-r',
  b:  'arc-top-b',
  g:  'arc-top-g',
  dk: 'arc-top-dk',
};

const ArcProjectCard = ({ project, onClick }) => {
  const { color, tag, range, title, pills, impact, status, statusTxt } = project;

  return (
    <div className="arc-proj-card" onClick={() => onClick(project)}>
      <div className={`arc-card-top ${COLOR_CLASS[color] || 'arc-top-r'}`}>
        <span className="arc-card-tag">{tag}</span>
        <span className="arc-card-range">{range}</span>
      </div>
      <div className="arc-card-body">
        <div className="arc-card-title">{title}</div>
        <div className="arc-card-pills">
          {pills.map((p) => (
            <span key={p} className="arc-pill">{p}</span>
          ))}
        </div>
        <div className="arc-card-foot">
          <span className="arc-card-impact">{impact}</span>
          <span className="arc-card-status">
            <span className={`arc-s-dot ${status === 'done' ? 'arc-s-done' : 'arc-s-sail'}`}></span>
            {statusTxt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArcProjectCard;