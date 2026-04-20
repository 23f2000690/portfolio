import { personalDetails } from '../data'

function Home() {
  return (
    <main className="page home-page">
      <section className="card intro-card">
        <img
          src={personalDetails.profileImage}
          alt={`${personalDetails.name} profile`}
          className="profile-picture"
        />
        <div>
          <h2>About Me</h2>
          <p>
            I am {personalDetails.name}, a Computer Science student who enjoys solving
            practical problems with software and data. I focus on building clean,
            user-friendly applications and continuously improving my technical depth.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Research Interests</h2>
        <ul className="list">
          {personalDetails.researchInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Education</h2>
        {personalDetails.education.map((item) => (
          <article key={item.degree} className="education-item">
            <h3>{item.degree}</h3>
            <p className="muted">{item.duration}</p>
            <ul className="list">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="card">
        <h2>Personal Details</h2>
        <div className="details-grid">
          <p>
            <strong>Name:</strong> {personalDetails.name}
          </p>
          <p>
            <strong>Phone:</strong> {personalDetails.phone}
          </p>
          <p>
            <strong>Personal Email:</strong> {personalDetails.personalEmail}
          </p>
          <p>
            <strong>College Email:</strong> {personalDetails.collegeEmail}
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href={personalDetails.github} target="_blank" rel="noreferrer">
              {personalDetails.github}
            </a>
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Skills</h2>
        <ul className="chip-list">
          {personalDetails.skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
