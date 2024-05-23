import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      {/* Brand */}
      <NavLink className="navbar-brand ps-3" to="/">
        Cinema
      </NavLink>
      {/* <a className="navbar-brand" href="#">
        Movie
      </a> */}
      {/* Toggler/collapsibe Button */}

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav d-flex justify-content-between w-100">
          <div className="links d-flex">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link my-active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link my-active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </div>
          <div className="auth pe-2">
            <li className="nav-item ">
              <NavLink className="btn btn-success" to="/login">
                Login
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
