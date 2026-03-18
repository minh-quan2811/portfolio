// Skills panel component
import React from 'react';
import PanelLabel from '../Common/PanelLabel';
import SkillTag from '../Common/SkillTag';
import '../../styles/sections.css';

const SkillsPanel = ({ skills = [] }) => {
  // Default skills data if not provided
  const defaultSkills = [
    { label: 'Python', variant: 'red' },
    { label: 'PyTorch', variant: 'red' },
    { label: 'LangChain', variant: 'red' },
    { label: 'RAG', variant: 'red' },
    { label: 'HuggingFace', variant: 'blue' },
    { label: 'GPT-4 / Claude', variant: 'blue' },
    { label: 'LangGraph', variant: 'blue' },
    { label: 'FastAPI', variant: 'blue' },
    { label: 'Docker', variant: 'green' },
    { label: 'Vector DBs', variant: 'green' },
    { label: 'React', variant: 'green' },
    { label: 'Linux', variant: 'green' },
  ];

  const skillsToDisplay = skills.length > 0 ? skills : defaultSkills;

  const handleSkillClick = (skill) => {
    console.log('Clicked skill:', skill);
    // You can add filtering or other functionality here
  };

  return (
    <div className="panel-full panel-skills" id="skills">
      <PanelLabel jpText="覇気">Skills</PanelLabel>
      <div className="skills-wrap">
        {skillsToDisplay.map((skill, index) => (
          <SkillTag
            key={index}
            label={typeof skill === 'string' ? skill : skill.label}
            variant={typeof skill === 'string' ? 'default' : skill.variant}
            onClick={() => handleSkillClick(skill)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsPanel;
