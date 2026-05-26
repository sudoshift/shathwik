import styles from "./File.module.css";
import Notepad from "../Notepad/Notepad";
import { useAnimatedWindow } from "../../hooks/useAnimatedWindow";
import { useWindowStack } from "../../hooks/useWindowStack";

function File({ fileName, href, icon, id, position, text, type }) {
  const notepad = useAnimatedWindow();
  const { bringToFront, getZIndex } = useWindowStack();
  const windowId = `file:${id}`;

  function openNotepad() {
    notepad.open();
    bringToFront(windowId);
  }

  if (type === "note")
    return (
      <>
        <div className={styles.container} style={position}>
          <button
            type="button"
            onClick={openNotepad}
            className={styles.fileButton}
            aria-label={`Open ${fileName}`}
          >
            <img src={icon} className={styles.img} alt="" />
            <p className="text">{fileName}</p>
          </button>
        </div>
        {notepad.isOpen && (
          <Notepad
            fileName={fileName}
            text={text}
            isClosing={notepad.isClosing}
            onClose={notepad.close}
            onFocusWindow={() => bringToFront(windowId)}
            zIndex={getZIndex(windowId)}
          />
        )}
      </>
    );
  return (
    <>
      <div className={styles.container} style={position}>
        <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${fileName}`}>
          <img src={icon} className={styles.img} alt="" />
          <p className="text">{fileName}</p>
        </a>
      </div>
    </>
  );
}

export default File;
