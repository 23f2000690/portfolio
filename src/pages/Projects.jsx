import { projects } from '../data'

function Projects() {
  return (
    <main className="page projects-page">
      <section className="card">
        <h2>Projects</h2>
        <p className="muted">
          A snapshot of my work. Each card links to the corresponding GitHub repository.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chip-list">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="github-link">
              View on GitHub
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Projects
