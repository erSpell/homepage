import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const commands = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'skills', label: 'Skills', path: '/skills' },
  { key: 'portfolio', label: 'Portfolio', path: '/portfolio' },
]

export default function Home() {
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState('type /help for available commands')
  const commandInputRef = useRef(null)
  const focusTimeoutRef = useRef(null)
  const navigate = useNavigate()

  const focusCommandInput = useCallback(() => {
    const inputElement = commandInputRef.current

    if (!inputElement) {
      return
    }

    inputElement.focus()
    inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length)
  }, [])

  useEffect(() => {
    focusCommandInput()

    return () => {
      clearTimeout(focusTimeoutRef.current)
    }
  }, [focusCommandInput])

  function handleInputBlur() {
    focusTimeoutRef.current = setTimeout(focusCommandInput, 0)
  }

  function handleNavigate(path) {
    navigate(path)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const command = input.trim().toLowerCase()
    setInput('')

    if (!command || command === 'help' || command === '/help') {
      setFeedback('commands: home, about, skills, portfolio, open <project>')
      return
    }

    const route = commands.find((item) => item.key === command)

    if (route) {
      setFeedback(`running: ${route.key}`)
      handleNavigate(route.path)
      return
    }

    if (command.startsWith('open ')) {
      const projectQuery = command.replace('open ', '').trim()
      const project = PROJECTS.find((item) => {
        return item.slug === projectQuery || item.title.toLowerCase() === projectQuery
      })

      if (project) {
        setFeedback(`opening: ${project.slug}`)
        handleNavigate(`/portfolio/${project.slug}`)
        return
      }
    }

    setFeedback(`command not found: ${command}`)
  }

  return (
    <div className="terminal-section">
      <p className="terminal-prompt">nite_owl [Version 1.0.2]</p>
      <p className="terminal-prompt">(c) nite_owl</p>
      <p className="terminal-prompt">C:\niteowl\main&gt;bash</p>
      <p className="terminal-prompt">
        {feedback}
      </p>
      <form className="prompt-line" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="home-command">
          Type a terminal command
        </label>
        <span className="terminal-line">$</span>
        <input
          ref={commandInputRef}
          id="home-command"
          className="terminal-command-input"
          style={{ width: `${Math.max(input.length, 1)}ch` }}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onBlur={handleInputBlur}
          autoComplete="off"
          autoFocus
        />
        <span className="cursor-top" aria-hidden="true"></span>
      </form>
      <div className="terminal-list">
        {commands.map((item, index) => (
          <span
            key={item.key}
            className="terminal-item"
            onClick={() => handleNavigate(item.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleNavigate(item.path)
              }
            }}
          >
            {index + 1}. {item.key}
          </span>
        ))}
      </div>
    </div>
  )
}
