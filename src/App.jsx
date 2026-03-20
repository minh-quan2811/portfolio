// Main App component
import React from 'react';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import HeroPanel from './components/Hero/HeroPanel';
import WantedPoster from './components/Hero/WantedPoster';
import AvailabilityPanel from './components/Sections/AvailabilityPanel';
import SkillsPanel from './components/Sections/SkillsPanel';
import ProjectsPanel from './components/Sections/ProjectsPanel';
import ChatPanel from './components/Chat/ChatPanel';
import './styles/theme.css';
import './styles/typography.css';
import './styles/global.css';
import './App.css';

function App() {
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    const nav = document.querySelector('.nav');
    if (element) {
      const navHeight = nav ? nav.offsetHeight : 0;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <Navigation onNavigate={handleNavigation} />

      <div className="wrapper">
        {/* HERO PANEL GRID */}
        <div className="panel-grid" id="about">
          <HeroPanel />

          {/* Right column: Wanted Poster + Availability */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <WantedPoster />
            <AvailabilityPanel />
          </div>
        </div>

        {/* SKILLS SECTION */}
        <SkillsPanel />

        {/* PROJECTS SECTION */}
        <ProjectsPanel />

        {/* CHAT/CONTACT SECTION */}
        <ChatPanel />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
