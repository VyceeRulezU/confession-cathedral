import styles from './EmptyState.module.css';

export default function EmptyState() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M6 21V9a6 6 0 0 1 12 0v12" />
          <path d="M9 21h6" />
          <path d="M12 12v0" />
        </svg>
      </div>
      <p className={styles.text}>No confessions yet. Be the first to speak.</p>
    </div>
  );
}
