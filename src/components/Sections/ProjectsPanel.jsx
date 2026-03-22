import React, { useState } from 'react';
import ArcProjectCard from './ArcProjectCard';
import ProjectModal from './ProjectModal';
import ALL_PROJECTS, { SEA_NAMES, YEARS } from '../../data/projects/index';
import { ISLAND_SVGS } from '../../data/islands';
import '../../styles/projects.css';

const ISLAND_POSITIONS = ['15%', '35%', '55%', '75%'];

const ProjectsPanel = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const getFiltered = () => {
    if (activeFilter === 'all') return ALL_PROJECTS;
    if (activeFilter === 'sailing') return ALL_PROJECTS.filter((p) => p.status === 'sail');
    return ALL_PROJECTS.filter((p) => p.year === activeFilter);
  };

  const filtered = getFiltered();

  const groupedByYear = filtered.reduce((acc, p) => {
    if (!acc[p.year]) acc[p.year] = [];
    acc[p.year].push(p);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort();

  const handleFilter = (value) => {
    const isSameFilter = value === activeFilter || (value === 'all' && activeFilter === 'all');
    if (isSameFilter) {
      setExpanded((v) => !v);
      return;
    }
    setActiveFilter(value);
    setSelectedProject(null);
    setExpanded(true);
  };

  const resultLabel = () => {
    if (activeFilter === 'all') return `${ALL_PROJECTS.length} PROJECTS CHARTED`;
    if (activeFilter === 'sailing') return `${filtered.length} STILL SAILING`;
    const sea = SEA_NAMES[activeFilter] || activeFilter;
    return `${filtered.length} PROJECT${filtered.length !== 1 ? 'S' : ''} · ${sea}`;
  };

  return (
    <div className="panel-full panel-projects arc-section" id="projects">

      {/* ── TOGGLE HEADER ── */}
      <button
        className="arc-toggle-header"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="arc-toggle-label">
          <span className="arc-toggle-title">ARC LOG</span>
          <span className="arc-toggle-jp">冒険</span>
        </div>
        <div className="arc-toggle-right">
          <span className="arc-toggle-hint">{expanded ? 'COLLAPSE' : 'EXPAND'}</span>
          <span className={`arc-toggle-chevron${expanded ? ' open' : ''}`}>&#9660;</span>
        </div>
      </button>

      {/* ── SEA MAP — always visible ── */}
      <div className="arc-sea-zone">
        <div className="arc-sea-top"></div>
        <div className="arc-sea-bot"></div>
        <div className="arc-sea-lines"></div>
        <div className="arc-gl-band"></div>
        <div className="arc-gl-label">GRAND LINE</div>
        <div className="arc-route"></div>

        {/* Compass */}
        <div className="arc-compass-box">
          <svg width="46" height="46" viewBox="0 0 46 46">
            <circle cx="23" cy="23" r="21" fill="#f5edda" stroke="#0e0a04" strokeWidth="2"/>
            <circle cx="23" cy="23" r="15" fill="none" stroke="#c8921a" strokeWidth="0.5" strokeDasharray="2 3"/>
            <polygon points="23,5 26,23 23,21 20,23" fill="#c8221a" stroke="#0e0a04" strokeWidth="1"/>
            <polygon points="23,41 26,23 23,25 20,23" fill="#f5edda" stroke="#0e0a04" strokeWidth="1"/>
            <polygon points="5,23 23,20 21,23 23,26"  fill="#f5edda" stroke="#0e0a04" strokeWidth="1"/>
            <polygon points="41,23 23,20 25,23 23,26"  fill="#f5edda" stroke="#0e0a04" strokeWidth="1"/>
            <circle cx="23" cy="23" r="2.5" fill="#0e0a04"/>
            <text x="23" y="10" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="7" fill="#c8221a">N</text>
            <text x="23" y="39" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="7" fill="#0e0a04">S</text>
            <text x="8"  y="27" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="7" fill="#0e0a04">W</text>
            <text x="39" y="27" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="7" fill="#0e0a04">E</text>
          </svg>
        </div>

        {/* Year islands */}
        {YEARS.map((yr, i) => {
          const isActive = activeFilter === yr;
          const count = ALL_PROJECTS.filter((p) => p.year === yr).length;
          return (
            <div
              key={yr}
              className={`arc-year-island${isActive && expanded ? ' active' : ''}`}
              style={{ left: ISLAND_POSITIONS[i] || `${12 + i * 18}%` }}
              onClick={() => isActive ? setExpanded((v) => !v) : handleFilter(yr)}
            >
              <div className="arc-isle-yr-label">{yr}</div>

              {/* ── Island SVG via lookup ── */}
              {ISLAND_SVGS[yr] ?? null}

              <div className="arc-isle-lbl">{SEA_NAMES[yr] || yr}</div>
              <div className="arc-isle-count">{count} PROJECT{count !== 1 ? 'S' : ''}</div>
            </div>
          );
        })}

        {/* Void Century marker */}
        <div
          className={`arc-now-marker${activeFilter === 'sailing' && expanded ? ' active' : ''}`}
          onClick={() => activeFilter === 'sailing' ? setExpanded((v) => !v) : handleFilter('sailing')}
        >
          <div className="arc-now-blob"><span className="arc-now-text">?</span></div>
          <div className="arc-now-lbl">VOID CENTURY</div>
          <div className="arc-now-sub">STILL SAILING</div>
        </div>

        <svg className="arc-waves-svg" viewBox="0 0 900 28" preserveAspectRatio="none" height="28" width="100%">
          <path d="M0,14 Q45,5 90,14 Q135,23 180,14 Q225,5 270,14 Q315,23 360,14 Q405,5 450,14 Q495,23 540,14 Q585,5 630,14 Q675,23 720,14 Q765,5 810,14 Q855,23 900,14" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2"/>
        </svg>
      </div>

      {/* ── FILTER BAR — always visible ── */}
      <div className="arc-filter-bar">
        <span className="arc-filter-label">FILTER BY YEAR</span>
        <div className="arc-filter-chips">
          <button
            className={`arc-fchip${activeFilter === 'all' && expanded ? ' active' : ''}`}
            onClick={() => handleFilter('all')}
          >ALL ARCS</button>
          {YEARS.map((yr) => (
            <button
              key={yr}
              className={`arc-fchip${activeFilter === yr && expanded ? ' active' : ''}`}
              onClick={() => handleFilter(yr)}
            >{yr}</button>
          ))}
          <button
            className={`arc-fchip${activeFilter === 'sailing' && expanded ? ' active' : ''}`}
            onClick={() => handleFilter('sailing')}
          >SAILING</button>
        </div>
        <span className="arc-filter-result">{resultLabel()}</span>
      </div>

      {/* ── CARDS — animated expand / collapse ── */}
      <div className={`arc-cards-drawer${expanded ? ' open' : ''}`}>
        <div className="arc-cards-section">
          {filtered.length === 0 ? (
            <div className="arc-empty">
              <div className="arc-empty-txt">NO PROJECTS AT THIS ISLAND YET</div>
              <div className="arc-empty-sub">THE CREW IS STILL SAILING</div>
            </div>
          ) : (
            sortedYears.map((yr) => (
              <div key={yr} className="arc-year-group">
                <div className="arc-yg-header">
                  <div className="arc-yg-year">{yr}</div>
                  <div className="arc-yg-line"></div>
                  <div className="arc-yg-count">
                    {groupedByYear[yr].length} PROJECT{groupedByYear[yr].length !== 1 ? 'S' : ''} · {SEA_NAMES[yr] || yr}
                  </div>
                </div>
                <div className="arc-cards-grid">
                  {groupedByYear[yr].map((project) => (
                    <ArcProjectCard
                      key={project.id}
                      project={project}
                      onClick={setSelectedProject}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── MODAL ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPanel;