import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="site-title">Sharad Portfolio</h1>
      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
