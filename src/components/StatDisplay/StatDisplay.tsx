import styles from './StatDisplay.module.css';

interface StatDisplayProps {
  label: string;
  stat: string;
}

function StatDisplay(props: StatDisplayProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{props.label}</span>
      <span className={styles.stat}>{props.stat}</span>
    </div>
  );
}

export default StatDisplay;
