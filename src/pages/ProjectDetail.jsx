import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="terminal-section">
        <p className="terminal-prompt">$ open {slug}</p>
        <h1>Project not found</h1>
        <p>Try one of the listed portfolio options instead.</p>
        <Link to="/portfolio" className="project-cta">
          Back to portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="terminal-section">
      <p className="terminal-prompt">$ open {project.slug}</p>
      <h1>{project.title}</h1>
      <p>{project.details}</p>
      <div className="project-meta">
        <strong>Tech used:</strong>
        <ul>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Link to="/portfolio" className="project-cta">
        Back to portfolio
      </Link>
    </div>
  )
}
