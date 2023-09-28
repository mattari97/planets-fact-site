import * as React from 'react';

import styles from './Navbar.module.css';
import json from '../../data/data.json';
import useStore from '../../data/store';

const NAVBAR_ITEMS = json.map((item) => ({ name: item.name, color: item.color }));

function Navbar() {
  const name = useStore((state) => state.data.name);
  const updateData = useStore((state) => state.updateData);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const navigate = (name: string) => () => {
    updateData(name);
    if (menuOpen) toggleMenu();
  };

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
          {NAVBAR_ITEMS.map((item, index) => (
            <li key={index}>
              <button
                role="navigation"
                aria-label={`Navigate to ${item.name}'s page`}
                aria-current={item.name === name}
                onClick={navigate(item.name)}
                style={{ '--accent-color': item.color } as React.CSSProperties}>
                <span>{item.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8" aria-hidden="true">
                  <path fill="none" stroke="currentColor" opacity=".4" d="m1 0 4 4-4 4" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
