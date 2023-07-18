import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <Link className="nav-link" to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt=" website logo"
        />
      </Link>
    </div>
  </nav>
)

export default Header
