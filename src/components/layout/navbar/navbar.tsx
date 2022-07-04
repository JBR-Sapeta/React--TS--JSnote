import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <section className="navbar is-black navigation">
      <h1 className="title is-2 ">
        <NavLink to="/home" className="">
          <span className="logo-primry ">JS</span>
          <span className="logo-white">note</span>
        </NavLink>
      </h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item title is-4">
            <NavLink to="/home" activeClassName="routeActive">
              Home
            </NavLink>
          </li>
          <li className="nav-item title is-4">
            <NavLink to="/editor" activeClassName="routeActive">
              Editor
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
