import styles from './Layout.module.css';
import { Navbar } from '../../components';
import { Navigate, Outlet, useParams } from 'react-router-dom';

function Layout() {
  const { slug } = useParams();
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
