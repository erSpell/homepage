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
  return null
}
