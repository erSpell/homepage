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
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(helpText)
  const navigate = useNavigate()

  function normalize(value) {
    return value.trim().toLowerCase()
  }

  function handleSubmit(event) {
    event.preventDefault()

    const command = normalize(input)
    setInput('')

    if (!command || command === 'help' || command === '/help') {
      setFeedback(helpText)
      return
    }

    const route = commands.find((item) => item.key === command)

    if (route) {
      setFeedback(`running: ${route.key}`)
      navigate(route.path)
      return
    }

    if (command.startsWith('open ')) {
      const projectQuery = command.replace('open ', '').trim()
      const project = PROJECTS.find((item) => {
        return item.slug === projectQuery || item.title.toLowerCase() === projectQuery
      })

      if (project) {
        setFeedback(`opening: ${project.slug}`)
        navigate(`/portfolio/${project.slug}`)
        return
      }
    }

    setFeedback(`command not found: ${command}. Type /help.`)
  }

  return (
    <footer className="terminal-footer">
      <nav className="terminal-block" aria-label="Terminal commands">
        <span className="terminal-line">available commands</span>
        <div className="terminal-list">
          {commands.map((item) => (
            <Link key={item.key} to={item.path} className="terminal-item">
              {item.label.toLowerCase()}
            </Link>
          ))}
        </div>
      </nav>

      <form className="command-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="terminal-command">
          Type a terminal command
        </label>
        <div className="terminal-input-row">
          <span className="terminal-line">$</span>
          <input
            id="terminal-command"
            className="terminal-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="type /help"
            autoComplete="off"
            autoFocus
          />
        </div>
        <p className="command-feedback" aria-live="polite">
          {feedback}
        </p>
      </form>
    </footer>
  )
}
