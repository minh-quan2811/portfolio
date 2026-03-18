// Projects panel component
import React from 'react';
import PanelLabel from '../Common/PanelLabel';
import ProjectCard from '../Common/ProjectCard';
import '../../styles/sections.css';

const ProjectsPanel = ({ projects = [] }) => {
  // Default projects if not provided
  const defaultProjects = [
    {
      number: '一',
      title: 'RAG Document QA System',
      description: 'Enterprise knowledge retrieval. 94% accuracy. Semantic chunking + hybrid search.',
      stack: 'LangChain · Pinecone · GPT-4 · FastAPI',
      year: 2024,
      topColor: 'red',
    },
    {
      number: '二',
      title: 'Vietnamese Sentiment Classifier',
      description: 'Fine-tuned PhoBERT. 10,000+ API requests daily. Deployed with Docker + CI/CD.',
      stack: 'PyTorch · HuggingFace · PhoBERT · Docker',
      year: 2024,
      topColor: 'blue',
    },
    {
      number: '三',
      title: 'Autonomous Research Agent',
      description: 'Multi-agent that reads papers and writes reports — no human needed. LangGraph stateful flow.',
      stack: 'LangGraph · Tavily · OpenAI · React',
      year: 2025,
      topColor: 'green',
    },
  ];

  const projectsToDisplay = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="panel-full panel-projects" id="projects">
      <PanelLabel jpText="冒険">ARC LOG</PanelLabel>
      <div className="projects-grid">
        {projectsToDisplay.map((project, index) => (
          <ProjectCard
            key={index}
            number={project.number}
            title={project.title}
            description={project.description}
            stack={project.stack}
            year={project.year}
            topColor={project.topColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPanel;
