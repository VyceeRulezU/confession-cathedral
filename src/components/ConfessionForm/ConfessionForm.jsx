import { useState } from 'react';
import styles from './ConfessionForm.module.css';
import CharacterCounter from '../CharacterCounter/CharacterCounter';
import { isEmptyOrWhitespace, exceedsMaxLength } from '../../utils/validators';

export default function ConfessionForm({ onSubmit }) {
  const [text, setText] = useState('');
  const MAX_CHARS = 280;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmptyOrWhitespace(text) || exceedsMaxLength(text, MAX_CHARS)) return;
    
    onSubmit(text);
    setText('');
  };

  const isInvalid = isEmptyOrWhitespace(text) || exceedsMaxLength(text, MAX_CHARS);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Say the thing you can't say anywhere else."
          aria-label="Your confession"
          spellCheck="false"
        />
        <div className={styles.counterWrapper}>
          <CharacterCounter count={text.length} max={MAX_CHARS} />
        </div>
      </div>
      <button 
        type="submit" 
        className={styles.button} 
        disabled={isInvalid}
        aria-disabled={isInvalid}
      >
        Drop Truth
      </button>
    </form>
  );
}
