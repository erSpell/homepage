import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import CommandMenu from './components/CommandMenu'
import './index.css'

function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        <section className="terminal-container">
          <div className="terminal-bar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <div className="terminal-title">portfolio-shell</div>
          </div>

          <div className="terminal-body">
            <div className="terminal-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:slug" element={<ProjectDetail />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
            <CommandMenu />
          </div>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default App
