import { useState } from 'react'
import './App.css'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'My Story', href: '#my-story' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Practice Platforms', href: '#practice-platforms' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const projects = [
    {
      title: 'TalentFlow ATS',
      summary:
        'A full-stack applicant tracking platform with role-based dashboards, resume parsing, and interview pipelines.',
      stack: 'React, Node.js, Express, PostgreSQL, Redis',
      impact: 'Reduced manual hiring workflow time by 40% for pilot teams.',
      github: 'https://github.com/',
    },
    {
      title: 'QuickCart Commerce',
      summary:
        'An e-commerce web app with product search, secure checkout, and order analytics for small stores.',
      stack: 'Next.js, TypeScript, Stripe, MongoDB',
      impact: 'Enabled end-to-end online sales for 50+ local vendors.',
      github: 'https://github.com/',
    },
    {
      title: 'Realtime TeamBoard',
      summary:
        'A collaborative task board with live updates, comments, and sprint burn-down visualizations.',
      stack: 'React, Socket.IO, Fastify, MySQL',
      impact: 'Improved team delivery visibility and reduced status meeting overhead.',
      github: 'https://github.com/',
    },
  ]

  const practicePlatforms = [
    {
      name: 'LeetCode',
      detail: '350+ problems solved across arrays, graphs, dynamic programming, and system design patterns.',
      url: 'https://leetcode.com/u/ShubhamPradhan/',
    },
    {
      name: 'GitHub',
      detail: 'Active open-source contributions and project documentation with CI/CD workflows.',
      url: 'https://github.com/Shubham-Pradhan-7',
    },
  ]

  const certificates = [
    {
      name: 'Full-Stack Web Development Certificate',
      issuer: 'Coursera',
      url: 'https://www.coursera.org/',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/',
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      url: 'https://aws.amazon.com/certification/',
    },
  ]

  const skills = {
    frontend: ['React', 'JavaScript', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express', 'REST APIs', 'WebSockets'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL'],
    devops: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify'],
  }

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#hero">
          Shubham Pradhan
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? 'Close' : 'Menu'}
        </button>
        <nav aria-label="Primary navigation">
          <ul className={`nav-list ${isNavOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsNavOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn-primary nav-resume-btn"  href="/resume.pdf" download>
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
          <div className="hero-layout">
            <div>
              <p className="eyebrow">Full-Stack Software Developer</p>
              <h1>Building scalable products from idea to production.</h1>
              <p className="lead">
                I design resilient backend systems and intuitive frontend experiences that solve real
                user problems and support business growth.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#projects">
                  View Projects
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-photo-card">
              <img
                className="hero-photo w-full h-full object-top-left"
                src="/pic.jpeg"
                alt="Developer portrait"
              />

            </div>
          </div>
        </section>

        <section id="my-story" className="section">
          <h2>My Story</h2>
          <p>
            I started as a curious self-learner experimenting with web pages, then evolved into a
            full-stack developer passionate about building complete digital products. Over the past
            few years, I have worked on applications spanning hiring, e-commerce, and collaboration
            tools. My favorite work sits at the intersection of product thinking, clean architecture,
            and user impact.
          </p>
        </section>

        <section id="education" className="section flex flex-col gap-4">
          <h2>Education</h2>
          <div className="card">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>Lovely Professional University</p>
            <p>2023 - 2027</p>
            <p>
              Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Cloud
              Computing, and Software Engineering.
            </p>
          </div>
          <div className="card">
            <h3>Higher Secondary</h3>
            <p>Sachdeva International School</p>
            <p>2021 - 2022</p>
            <p>
              Coursework: Mathematics, Physics, and Chemistry.
            </p>
          </div>
          <div className="card">
            <h3>Secondary School</h3>
            <p>Sachdeva International School</p>
            <p>2019 - 2020</p>
            <p>
              Coursework: Foundation in science and mathematics with early exposure to programming concepts.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p>
                  <strong>Stack:</strong> {project.stack}
                </p>
                <p>
                  <strong>Impact:</strong> {project.impact}
                </p>
                <a className="btn btn-secondary card-btn" href={project.github} target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section">
          <h2>Certificates</h2>
          <div className="grid">
            {certificates.map((certificate) => (
              <a
                key={certificate.name}
                className="card card-link"
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{certificate.name}</h3>
                <p>{certificate.issuer}</p>
                <p>Click to view certificate</p>
              </a>
            ))}
          </div>
        </section>

        <section id="practice-platforms" className="section">
          <h2>Practice Platforms</h2>
          <div className="grid">
            {practicePlatforms.map((platform) => (
              <a
                key={platform.name}
                className="card card-link"
                href={platform.url}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{platform.name}</h3>
                <p>{platform.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <article className="card">
              <h3>Frontend</h3>
              <p>{skills.frontend.join(' • ')}</p>
            </article>
            <article className="card">
              <h3>Backend</h3>
              <p>{skills.backend.join(' • ')}</p>
            </article>
            <article className="card">
              <h3>Database</h3>
              <p>{skills.database.join(' • ')}</p>
            </article>
            <article className="card">
              <h3>DevOps & Deployment</h3>
              <p>{skills.devops.join(' • ')}</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Open to full-time roles, freelance projects, and collaboration opportunities.</p>
          <form
            className="contact-form card"
            action="mailto:dev@example.com"
            method="post"
            encType="text/plain"
          >
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button className="btn btn-primary" type="submit">
              Send Email
            </button>
          </form>
          <div className="contact-list">
            <a href="mailto:sagark78007.com">sagark78007@example.com</a>
            <a href="https://github.com/Shubham-Pradhan-7" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://leetcode.com/u/ShubhamPradhan/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Full-Stack Developer Portfolio</p>
      </footer>
    </div>
  )
}

export default App
