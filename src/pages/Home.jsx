import { useNavigate } from 'react-router-dom'

const commands = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'skills', label: 'Skills', path: '/skills' },
  { key: 'portfolio', label: 'Portfolio', path: '/portfolio' },
]

export default function Home() {
  const navigate = useNavigate()

  function handleNavigate(path) {
    navigate(path)
  }

  return (
    <div className="terminal-section">
      <p className="terminal-prompt">nite_owl [Version 1.0.2]</p>
      <p className="terminal-prompt">(c) nite_owl</p>
      <p className="terminal-prompt">C:\niteowl\main&gt;bash</p>
      <p className="terminal-prompt">
        type /help for available commands
      </p>
      <div className="prompt-line">
        <span className="terminal-line">$ </span>
        <span className="cursor-top"></span>
      </div>
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
