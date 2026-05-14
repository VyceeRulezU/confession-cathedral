import styles from './CharacterCounter.module.css';

export default function CharacterCounter({ count, max = 280 }) {
  const isWarning = count >= max * 0.9;
  const isDanger = count >= max;

  return (
    <div 
      className={`${styles.counter} ${isWarning ? styles.warning : ''} ${isDanger ? styles.danger : ''}`}
      aria-live="polite"
    >
      {count} / {max}
    </div>
  );
}
