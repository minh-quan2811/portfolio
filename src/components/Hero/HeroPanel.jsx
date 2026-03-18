// Hero panel component - main introduction section
import React from 'react';
import '../../styles/hero.css';

const HeroPanel = () => {
  return (
    <div className="panel panel-hero">
      {/* One Piece top caption */}
      <div className="op-caption-top">
        <span className="op-vol">巻 01 · ARC: ORIGIN</span>
        <span className="op-caption-text">
          Somewhere on the Grand Line of technology, a <em>dangerous mind</em> has set sail...
        </span>
      </div>

      {/* Action lines SVG */}
      <svg className="action-lines" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="150" x2="500" y2="0" strokeWidth="6" />
        <line x1="0" y1="150" x2="500" y2="50" strokeWidth="4" />
        <line x1="0" y1="150" x2="500" y2="110" strokeWidth="3" />
        <line x1="0" y1="150" x2="500" y2="170" strokeWidth="2" />
        <line x1="0" y1="150" x2="500" y2="230" strokeWidth="3" />
        <line x1="0" y1="150" x2="500" y2="290" strokeWidth="4" />
        <line x1="0" y1="150" x2="400" y2="0" strokeWidth="2" />
        <line x1="0" y1="150" x2="200" y2="0" strokeWidth="2" />
      </svg>

      <div className="screentone-corner"></div>

      {/* Hero body content */}
      <div className="hero-body">
        <div className="op-intro">introducing</div>
        <span className="op-furigana">ダ ン グ &nbsp;&nbsp; ミ ン &nbsp;&nbsp; ク ア ン</span>
        <div className="hero-name">Dang Minh Quan</div>
        <div className="op-epithet">"The AI Architect"</div>

        <div className="op-narrator">
          His dream: to build AI systems so powerful they actually survive production. Armed with
          Python, PyTorch, and <strong>an unreasonable amount of LangChain knowledge.</strong>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="op-caption-bottom">
        <span className="op-caption-bottom-text">TO BE CONTINUED · 次のページへ · VOL.1</span>
        <div className="op-page-dots">
          <div className="op-dot on"></div>
          <div className="op-dot"></div>
          <div className="op-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroPanel;
