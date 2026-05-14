import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Confession Cathedral</h1>
      <p className={styles.tagline}>An anonymous wall where people drop their truth.</p>
      <div className={styles.divider} />
    </header>
  );
}
