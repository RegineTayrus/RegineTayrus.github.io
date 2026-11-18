import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logs.jpg";

const workCategories = ["Web Design", "Web Development", "Graphic Design"];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <Link to="/" className="logo" aria-label="Regine Portfolio home">
        <img src={logo} alt="Regine logo" />
      </Link>

      <nav aria-label="Main navigation">
        <ul>
          <li>
            <NavLink to="/" end>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/work" className="dropdown-link">
              WORK
            </NavLink>
            <button
              type="button"
              className="dropdown-btn"
              aria-label="Show work categories"
              aria-expanded={menuOpen}
              aria-controls="work-category-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              ▼
            </button>
            <ul
              id="work-category-menu"
              className={`dropdown-menu${menuOpen ? " show" : ""}`}
            >
              {workCategories.map((category) => (
                <li key={category}>
                  <Link to="/work" onClick={() => setMenuOpen(false)}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
