import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const commands = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'skills', label: 'Skills', path: '/skills' },
  { key: 'portfolio', label: 'Portfolio', path: '/portfolio' },
]

const helpText = 'Click a command or type: home, about, skills, portfolio, open <project>.'

export default function CommandMenu() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(helpText)

  function handleNavigate(path, label) {
    navigate(path)
    setFeedback(`$ ${label}`)
    setInput('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const command = input.trim().toLowerCase()
    if (!command) {
      setFeedback('Please enter a command.')
      return
    }

    const matched = commands.find(
      (item) => item.key === command || item.label.toLowerCase() === command,
    )

    if (matched) {
      handleNavigate(matched.path, command)
      return
    }

    if (command.startsWith('open ')) {
      const target = command.slice(5).trim()
      const bySlug = PROJECTS.find((project) => project.slug === target)
      const byIndex = PROJECTS[Number(target) - 1]

      if (bySlug) {
        handleNavigate(`/portfolio/${bySlug.slug}`, command)
        return
      }

      if (byIndex) {
        handleNavigate(`/portfolio/${byIndex.slug}`, command)
        return
      }
    }

    setFeedback(`Command not found: ${command}`)
  }

  return (
    <div className="terminal-footer">
      <div className="terminal-block">
        <div className="terminal-line">$ available commands</div>
        <div className="terminal-list">
          {commands.map((item, index) => (
            <span
              key={item.key}
              className="terminal-item"
              onClick={() => handleNavigate(item.path, item.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleNavigate(item.path, item.key)
                }
              }}
            >
              {index + 1}. {item.key}
            </span>
          ))}
        </div>
      </div>

      <div className="terminal-block">
        <div className="terminal-line">$ portfolio commands</div>
        <div className="terminal-list">
          {PROJECTS.map((project, index) => (
            <span
              key={project.slug}
              className="terminal-item"
              onClick={() => handleNavigate(`/portfolio/${project.slug}`, `open ${project.slug}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleNavigate(`/portfolio/${project.slug}`, `open ${project.slug}`)
                }
              }}
            >
              {index + 1}. open {project.slug}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="command-form">
        <label htmlFor="terminal-input" className="sr-only">
          Type a command
        </label>
        <div className="terminal-input-row">
          <span className="terminal-line">$</span>
          <input
            id="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type command and press Enter"
            className="terminal-input"
            autoComplete="off"
          />
        </div>
      </form>
      <p className="command-feedback">{feedback}</p>
    </div>
  )
}
