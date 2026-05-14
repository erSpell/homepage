const skills = ['React', 'Vite', 'JavaScript', 'CSS', 'Responsive design', 'UX-friendly interfaces']

export default function Skills() {
  return (
    <div className="terminal-section">
      <p className="terminal-prompt">$ skills</p>
      <h1>Skills</h1>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p>These are the technologies and techniques used to build this portfolio shell.</p>
    </div>
  )
}
