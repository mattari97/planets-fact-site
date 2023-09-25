import * as React from 'react';

import styles from './Layout.module.css';
import starsHelpers from '../../helpers/starsHelpers';
import { Navbar } from '../../components';
import { Navigate, Outlet, useParams } from 'react-router-dom';

function Layout() {
  const { slug } = useParams();

  React.useEffect(() => {
    starsHelpers.createStar(30);
    starsHelpers.animateStars();
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
