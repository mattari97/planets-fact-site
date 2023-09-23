import * as React from 'react';

import styles from './Navbar.module.css';
import json from '../../data/data.json';

const NAVBAR_ITEMS = json.map((item) => ({ name: item.name, color: item.color }));

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const active = NAVBAR_ITEMS[0];

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <span>The Planets</span>
      </div>
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
          {NAVBAR_ITEMS.map((item, index) => {
            const isActive = active.name === item.name;
            return (
              <li key={index}>
                <a data-active={isActive} aria-disabled={isActive} href={isActive ? '' : '#'}>
                  <div className={styles.bullet} style={{ backgroundColor: `hsl(${item.color})` }} aria-hidden="true" />
                  <span>{item.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8" aria-hidden="true">
                    <path fill="none" stroke="currentColor" opacity=".4" d="m1 0 4 4-4 4" />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
