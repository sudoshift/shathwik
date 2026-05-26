import styles from "./Safari.module.css";
import openImg from "../../assets/Safari/open-in-browser.svg";
import leftImg from "../../assets/Safari/left.svg";
import rightImg from "../../assets/Safari/right.svg";
import searchImg from "../../assets/Safari/search-icon.svg";

function Safari({ url, isClosing, onClose, onFocusWindow, zIndex }) {
  return (
    <div
      className={`${styles.card} ${isClosing ? styles.hidden : styles.active}`}
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
            aria-label="Close browser preview"
          ></button>
          <span className={`${styles.circle} ${styles.yellow}`}></span>
          <span className={`${styles.circle} ${styles.green}`}></span>
        </div>
        <div className={styles.browser}>
          <div className={styles.chevrons}>
            <img src={leftImg} alt="" />
            <img src={rightImg} alt="" />
          </div>
          <div className={styles.searchBar}>
            <img src={searchImg} className={styles.searchIcon} alt="" />
            {url}
          </div>
          <div className={styles.openInBrowser}>
            <a href={url} target="_blank" rel="noreferrer" aria-label="Open in browser">
              <img src={openImg} width="50" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.iframeContainer}>
        <iframe
          src={url}
          title="Browser Preview"
          className={styles.iframe}
          allow="fullscreen"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Safari;
