import styles from "./Folder.module.css";
import folderImg from "../../assets/Dock/19.avif";
import Safari from "../Safari/Safari";
import { useAnimatedWindow } from "../../hooks/useAnimatedWindow";
import { useWindowStack } from "../../hooks/useWindowStack";

function Folder({ project }) {
  const safari = useAnimatedWindow();
  const { bringToFront, getZIndex } = useWindowStack();
  const { id, name, position, url } = project;
  const windowId = `project:${id}`;

  function openSafari() {
    safari.open();
    bringToFront(windowId);
  }

  return (
    <>
      <div className={styles.container} style={position}>
        <button
          type="button"
          onClick={openSafari}
          className={styles.clickable}
          aria-label={`Open ${name}`}
        >
          <img src={folderImg} className={styles.img} alt="" />
          <p className="text">{name}</p>
        </button>
      </div>
      {safari.isOpen && (
        <Safari
          url={url}
          isClosing={safari.isClosing}
          onClose={safari.close}
          onFocusWindow={() => bringToFront(windowId)}
          zIndex={getZIndex(windowId)}
        />
      )}
    </>
  );
}

export default Folder;
