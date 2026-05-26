import styles from "./Notepad.module.css";

function Notepad({ text, isClosing, onClose, fileName, onFocusWindow, zIndex }) {
  return (
    <div
      className={`${styles.card} ${isClosing ? styles.hidden : styles.visible}`}
      style={{ zIndex }}
      onMouseDownCapture={onFocusWindow}
      onFocusCapture={onFocusWindow}
    >
      <div className={styles.topBar}>
        <div className={styles.circles}>
          <button
            className={`${styles.circle} ${styles.red}`}
            type="button"
            onClick={onClose}
            aria-label={`Close ${fileName}`}
          ></button>
          <span className={`${styles.circle} ${styles.yellow}`}></span>
          <span className={`${styles.circle} ${styles.green}`}></span>
        </div>
        <div className={styles.browser}>
          <p>{fileName}</p>
        </div>
      </div>
      <div className={styles.textArea}>{text}</div>
    </div>
  );
}

export default Notepad;
