import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

export default function Portfolio() {
  return (
    <div className="terminal-section">
      <p className="terminal-prompt">$ portfolio</p>
      <h1>Portfolio</h1>
      <p>Select a project below or type <strong>open &lt;project&gt;</strong> in the command field.</p>
      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <article key={project.slug} className="project-card">
            <h2>{index + 1}. {project.title}</h2>
            <p>{project.summary}</p>
            <Link to={`/portfolio/${project.slug}`} className="project-cta">
              Open project
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
