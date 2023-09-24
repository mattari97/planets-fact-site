import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import json from '../../data/data.json';

const NAVBAR_ITEMS = json.map((item) => ({ name: item.name, color: item.color, slug: item.slug }));

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.wrapper}>
      <Link to={'/mercury'} className={styles.logo}>
        <span>The Planets</span>
      </Link>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label={`${menuOpen ? 'Close' : 'Open'} navigation`}
        data-active={menuOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17">
          <path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" fill="currentColor" fillRule="evenodd" />
        </svg>
      </button>
      <nav className={styles.nav} aria-expanded={menuOpen}>
        <ul>
          {NAVBAR_ITEMS.map((item, index) => (
            <li key={index}>
              <NavLink role="link" to={`/${item.slug}`}>
                <div className={styles.bullet} style={{ backgroundColor: `hsl(${item.color})` }} aria-hidden="true" />
                <span>{item.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8" aria-hidden="true">
                  <path fill="none" stroke="currentColor" opacity=".4" d="m1 0 4 4-4 4" />
                </svg>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
