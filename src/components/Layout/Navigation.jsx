// Navigation component - header with links and ticker
import React, { useEffect, useRef } from 'react';
import '../../styles/layout.css';

const Navigation = ({ onNavigate }) => {
  const tickerRef = useRef(null);

  useEffect(() => {
    // Initialize ticker animation
    const ticker = tickerRef.current;
    if (ticker) {
      const inner = ticker.querySelector('.ticker-inner');
      if (inner) {
        // Clone inner for seamless loop
        const clone = inner.cloneNode(true);
        ticker.appendChild(clone);
      }
    }
  }, []);

  const navLinks = [
    { label: 'Work', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="logo">
          Dang Minh Quan<span>.</span>
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-strip">
        <div className="nav-ticker" ref={tickerRef}>
          <span className="ticker-inner">
            Python &nbsp;·&nbsp; PyTorch &nbsp;·&nbsp; LangChain &nbsp;·&nbsp; RAG
            &nbsp;·&nbsp; LLMs &nbsp;·&nbsp; LangGraph &nbsp;·&nbsp; HuggingFace &nbsp;·&nbsp;
            FastAPI &nbsp;·&nbsp; Docker &nbsp;·&nbsp; Vector DBs &nbsp;·&nbsp; React
            &nbsp;·&nbsp;
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
