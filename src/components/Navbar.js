import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbarScroll">
        <div className="container">
          <a className="navbar-brand">
            <img
              src="../images/image2.png"
              alt="Logo"
              className="navbar-logo"
            />
            <h4 className="navbarname">shaikchandbasha</h4>
          </a>

          <div className="navlink-container">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
