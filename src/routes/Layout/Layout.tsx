import styles from './Layout.module.css';
import { Navbar } from '../../components';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
