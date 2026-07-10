# nite_owl — terminal portfolio

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=0b1020" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=for-the-badge&logo=javascript&logoColor=0b1020" />
  <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/erSpell/homepage?style=for-the-badge&logo=github" />
</p>

<p align="center">
  A keyboard-first, terminal-themed portfolio built with React, Vite, and React Router.
  It turns a personal homepage into an interactive shell: type commands, open projects, and browse work like you are inside a tiny OS.
</p>

```bash
$ whoami
nite_owl

$ help
commands: home, about, skills, portfolio, open <project>

$ open project-alpha
loading case study...
```

## Why it exists

Most portfolio sites feel like static brochures. This one is meant to feel like a live workspace: minimal, fast, hacker-ish, and fun to explore while still remaining accessible through clickable navigation.

## Highlights

- **Terminal-inspired UX** with typed commands and prompt feedback
- **Keyboard-friendly navigation** plus clickable fallbacks
- **Route-based project pages** powered by React Router
- **Responsive Vite build** with a small, focused dependency set
- **Portfolio data model** separated from page rendering for easy project updates

## Tech stack

| Layer | Tools |
| --- | --- |
| UI | React 19 |
| Build | Vite 8 |
| Routing | React Router 7 |
| Styling | Plain CSS |
| Quality | ESLint |

## Quick start

```bash
npm install
npm run dev
```

Build and lint before shipping:

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
  components/        shared terminal UI pieces
  data/              project metadata
  pages/             route-level screens
  App.jsx            router shell
  index.css          global styling
```

## Current commands

| Command | Result |
| --- | --- |
| `home` | Return to the terminal landing page |
| `about` | Open the about route |
| `skills` | Open the skills route |
| `portfolio` | Open the portfolio route |
| `open <project>` | Open a project detail page by slug or title |
| `/help` | Show available commands |

## Roadmap

- [ ] Fill the placeholder About, Skills, and Portfolio pages with real copy
- [ ] Add polished case studies for completed projects
- [ ] Add deployment workflow for GitHub Pages or another static host
- [ ] Capture a demo GIF/screenshot for this README

## Links

- Repository: https://github.com/erSpell/homepage
- Owner: [@erSpell](https://github.com/erSpell)

---

<p align="center"><strong>Built to feel less like a resume and more like a shell into the work.</strong></p>
