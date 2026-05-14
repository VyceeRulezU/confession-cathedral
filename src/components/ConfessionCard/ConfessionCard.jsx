import styles from './ConfessionCard.module.css';
import { useRelativeTime } from '../../hooks/useRelativeTime';

export default function ConfessionCard({ confession }) {
  const relativeTime = useRelativeTime(confession.timestamp);

  return (
    <article className={styles.card}>
      <p className={styles.text}>{confession.text}</p>
      <time className={styles.timestamp} dateTime={confession.timestamp.toISOString()}>
        {relativeTime}
      </time>
    </article>
  );
}
