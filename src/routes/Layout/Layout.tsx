import * as React from 'react';

import styles from './Layout.module.css';
import { backgroundHelpers } from '../../helpers';
import { Navbar } from '../../components';
import { Navigate, Outlet, useParams } from 'react-router-dom';

function Layout() {
  const { slug } = useParams();

  React.useEffect(() => {
    backgroundHelpers.createStar(30);
    backgroundHelpers.animateStars();
    backgroundHelpers.createCircle(60);
    window.addEventListener('resize', backgroundHelpers.shuffleCircles);

    return () => window.removeEventListener('resize', backgroundHelpers.shuffleCircles);
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
