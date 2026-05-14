import styles from './ConfessionFeed.module.css';
import ConfessionCard from '../ConfessionCard/ConfessionCard';
import EmptyState from '../EmptyState/EmptyState';

export default function ConfessionFeed({ confessions }) {
  if (confessions.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.feed}>
      {confessions.map((confession) => (
        <ConfessionCard key={confession.id} confession={confession} />
      ))}
    </div>
  );
}
