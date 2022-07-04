import { NavLink } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../assets/icons/logo-facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/logo-instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/logo-twitter.svg";

import "./footer.css";

const Footer: React.FC = () => {
  return (
    <section className="navbar is-blsck">
      <footer className="footer-container">
        <h2 className="title is-3 logo">
          <NavLink to="/home" className="">
            <span className="logo-primry ">JS</span>
            <span className="logo-white">note</span>
          </NavLink>
        </h2>

        <div>
          <ul className="icons">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com"
                aria-label="Facebook"
              >
                {" "}
                <Facebook className="icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com"
                aria-label="Instagram"
              >
                {" "}
                <Instagram className="icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com"
                aria-label="Twitter"
              >
                {" "}
                <Twitter className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
