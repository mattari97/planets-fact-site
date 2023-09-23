import { useParams } from 'react-router-dom';
import styles from './Planet.module.css';
import jsonData from '../../data/data.json';

function getPlanetData(slug: string | undefined) {
  if (!slug) return jsonData[0];
  for (let i = 0; i < jsonData.length; i++) {
    const data = jsonData[i];
    if (data.slug === slug) return data;
  }
  throw new Error('Unknown slug');
}

function Planet() {
  const { slug } = useParams();
  const data = getPlanetData(slug);
  return (
    <div className={styles.wrapper}>
      <h1>{data.name}</h1>
    </div>
  );
}

export default Planet;
