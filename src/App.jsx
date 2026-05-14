import styles from './App.module.css';
import Header from './components/Header/Header';
import ConfessionForm from './components/ConfessionForm/ConfessionForm';
import ConfessionFeed from './components/ConfessionFeed/ConfessionFeed';
import { useConfessions } from './hooks/useConfessions';

function App() {
  const { confessions, addConfession } = useConfessions();

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Header />
        
        <section className={styles.formSection}>
          <ConfessionForm onSubmit={addConfession} />
        </section>

        <section className={styles.feedSection}>
          <ConfessionFeed confessions={confessions} />
        </section>

        <footer className={styles.footer}>
          <p>Confession Cathedral &copy; {new Date().getFullYear()}</p>
          <p className={styles.footerMuted}>Anonymous by design. Ephemeral by nature.</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
