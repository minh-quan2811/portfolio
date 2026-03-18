# Dang Minh Quan - One Piece Portfolio (React)

A scalable, component-based React refactor of the One Piece-themed portfolio.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Create environment file:**
```bash
cp .env.example .env
```

3. **Add your photo to public/images/**
   - Update `WantedPoster.jsx` with the correct image path

### Development

Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📦 Component Architecture

### Layout Components
- **Navigation**: Header with logo and navigation links
- **Footer**: Footer with social links

### Hero Section
- **HeroPanel**: Main introduction with One Piece styling
- **WantedPoster**: Wanted poster display with photo
- **AvailabilityPanel**: "Open to Work" status indicator

### Section Components
- **SkillsPanel**: Skills/Haki levels display
- **ProjectsPanel**: Project cards grid
- **ChatPanel**: Interactive chat interface
  - **ChatInput**: Message input with send button
  - **ContactGrid**: Contact links (GitHub, LinkedIn, etc.)

### Common Components (Reusable)
- **PanelLabel**: Section title with Japanese text
- **SkillTag**: Individual skill badge
- **ProjectCard**: Single project display

## 🎨 Customization

### Colors & Theme
Edit `src/styles/theme.css` to customize colors:
```css
:root {
  --ink: #0e0a04;
  --parchment: #f5edda;
  --red: #c8221a;
  --gold: #c8921a;
  /* ... more colors */
}
```

### Adding New Skills
In `SkillsPanel.jsx`, add to the `defaultSkills` array:
```javascript
{ label: 'New Skill', variant: 'red' }
```

### Adding New Projects
In `ProjectsPanel.jsx`, add to the `defaultProjects` array:
```javascript
{
  number: '四',
  title: 'Project Title',
  description: 'Description',
  stack: 'Tech Stack',
  year: 2025,
  topColor: 'red'
}
```
