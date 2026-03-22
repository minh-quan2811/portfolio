import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ArcProjectCard from './ArcProjectCard';
import '../../styles/projects.css';

const ProjectModal = ({ project, onClose }) => {
  const { tag, range, status, statusTxt, details } = project;
  const dotClass = status === 'done' ? 'arc-s-done' : 'arc-s-sail';

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const modal = (
    <div
      className="arc-modal-bg"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="arc-modal-box">

        {/* Top bar */}
        <div className="arc-modal-topbar">
          <span className="arc-modal-topbar-tag">{tag} · {range}</span>
          <button className="arc-modal-close" onClick={onClose}>CLOSE ×</button>
        </div>

        <div className="arc-modal-body">

          {/* LEFT — the real card */}
          <div className="arc-modal-left">
            <div className="arc-modal-card-wrap">
              <ArcProjectCard
                project={project}
                onClick={() => {}}
              />
            </div>
          </div>

          {/* RIGHT — scrollable detail */}
          <div className="arc-modal-right">
            <div className="arc-modal-scroll">

              <div className="arc-detail-section">
                <span className="arc-detail-lbl">CAPTAIN'S OVERVIEW</span>
                <p className="arc-detail-overview">{details.overview}</p>
              </div>

              <div className="arc-detail-section">
                <span className="arc-detail-lbl">MISSION STATS</span>
                <div className="arc-detail-stats-grid">
                  {details.stats.map((s) => (
                    <div key={s.name} className="arc-detail-stat">
                      <span className="arc-detail-stat-name">{s.name}</span>
                      <span className="arc-detail-stat-val">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="arc-detail-section">
                <span className="arc-detail-lbl">CREW MANIFEST</span>
                <div className="arc-detail-crew-grid">
                  {details.crew.map((c) => (
                    <div key={c.role} className="arc-detail-crew-card">
                      <span className="arc-detail-crew-role">{c.role}</span>
                      <div className="arc-detail-crew-name">{c.name}</div>
                      <div className="arc-detail-crew-note">{c.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="arc-detail-section">
                <span className="arc-detail-lbl">TECH ARSENAL</span>
                <div className="arc-detail-stack-wrap">
                  {details.stack.map((s) => (
                    <span key={s} className="arc-detail-stack-pill">{s}</span>
                  ))}
                </div>
              </div>

              <div className="arc-detail-section">
                <span className="arc-detail-lbl">KEY ACHIEVEMENTS</span>
                <div className="arc-detail-highlights">
                  {details.highlights.map((h, i) => (
                    <div key={i} className="arc-detail-highlight">{h}</div>
                  ))}
                </div>
              </div>

            </div>

            <div className="arc-modal-footer">
              <div className="arc-modal-footer-status">
                <span className={`arc-s-dot ${dotClass}`}></span>
                {statusTxt}
              </div>
              <div className="arc-modal-footer-meta">YEAR · {range}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};

export default ProjectModal;