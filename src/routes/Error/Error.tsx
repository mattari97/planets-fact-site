import { Link } from 'react-router-dom';
import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.wrapper}>
      <h1>Oops!</h1>
      <p>Seems like you are lost 😕</p>
      <Link to={'/'}>Go back to the app</Link>
    </div>
  );
}

export default Error;
