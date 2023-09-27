import * as React from 'react';

import styles from './Layout.module.css';
import { circlesHelpers, starsHelpers } from '../../helpers';
import { Navbar } from '../../components';
import { Navigate, Outlet, useParams } from 'react-router-dom';

function Layout() {
  const { slug } = useParams();

  React.useEffect(() => {
    starsHelpers.createStar(30);
    starsHelpers.animateStars();
    circlesHelpers.createCircle(60);
    window.addEventListener('resize', circlesHelpers.shuffleCircles);

    return () => window.removeEventListener('resize', circlesHelpers.shuffleCircles);
  }, []);

  return !slug ? (
    <Navigate to={'/mercury'} />
  ) : (
    <div className={styles.wrapper}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
