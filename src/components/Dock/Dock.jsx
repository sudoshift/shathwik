import styles from "./Dock.module.css";
import Safari from "../Safari/Safari";
import Notepad from "../Notepad/Notepad";
import { SPOTIFY_PLAYLIST_EMBED_URL } from "../../constants/app";
import { dockItems, DOCK_APPS } from "../../data/dock";
import { defaultProject } from "../../data/projects";
import { profile } from "../../data/profile";
import { useWindowStack } from "../../hooks/useWindowStack";
import { useAnimatedWindow } from "../../hooks/useAnimatedWindow";

const DOCK_WINDOW_IDS = {
  [DOCK_APPS.notepad]: "dock:notepad",
  [DOCK_APPS.safari]: "dock:safari",
  [DOCK_APPS.spotify]: "dock:spotify",
};

function Dock() {
  const spotify = useAnimatedWindow();
  const safari = useAnimatedWindow();
  const notepad = useAnimatedWindow();
  const { bringToFront, getZIndex } = useWindowStack();

  function handleClick(app) {
    const windowId = DOCK_WINDOW_IDS[app];

    if (app === DOCK_APPS.spotify) {
      spotify.open();
    } else if (app === DOCK_APPS.safari) {
      safari.open();
    } else if (app === DOCK_APPS.notepad) {
      notepad.open();
    }

    if (windowId) {
      bringToFront(windowId);
    }
  }

  function handleContextMenu(event, app) {
    event.preventDefault();

    if (app === DOCK_APPS.spotify) {
      spotify.close();
    } else if (app === DOCK_APPS.safari) {
      safari.close();
    } else if (app === DOCK_APPS.notepad) {
      notepad.close();
    }
  }

  const isDockItemActive = (app) => {
    if (app === DOCK_APPS.spotify) return spotify.isOpen;
    if (app === DOCK_APPS.safari) return safari.isOpen;
    if (app === DOCK_APPS.notepad) return notepad.isOpen;
    return false;
  };

  return (
    <>
      <nav className={styles.dock} aria-label="Application dock">
        {dockItems.map(({ app, dividerAfter, image, label }) => (
          <div className={styles.dockWrapper} key={label}>
            <button
              type="button"
              className={styles.dock_item}
              onClick={() => handleClick(app)}
              onContextMenu={(event) => handleContextMenu(event, app)}
              aria-label={app ? `Open ${label}` : label}
              title={
                app ? `${label}: click to open or focus, right-click to close` : label
              }
              disabled={!app}
            >
              <img src={image} className={styles.dock_img} alt="" />
              {isDockItemActive(app) && <span className={styles.activeIndicator}></span>}
            </button>
            {dividerAfter && <span className={styles.divider} aria-hidden="true"></span>}
          </div>
        ))}
      </nav>

      {spotify.isOpen && (
        <div
          className={`${styles.spotify_player} ${spotify.isClosing ? styles.hidden : ""}`}
          style={{ zIndex: getZIndex(DOCK_WINDOW_IDS[DOCK_APPS.spotify]) }}
          onMouseDownCapture={() => bringToFront(DOCK_WINDOW_IDS[DOCK_APPS.spotify])}
          onFocusCapture={() => bringToFront(DOCK_WINDOW_IDS[DOCK_APPS.spotify])}
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src={SPOTIFY_PLAYLIST_EMBED_URL}
            width="100%"
            height="352"
            title="Spotify playlist"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {safari.isOpen && (
        <Safari
          url={defaultProject.url}
          isClosing={safari.isClosing}
          onClose={safari.close}
          onFocusWindow={() => bringToFront(DOCK_WINDOW_IDS[DOCK_APPS.safari])}
          zIndex={getZIndex(DOCK_WINDOW_IDS[DOCK_APPS.safari])}
        />
      )}
      {notepad.isOpen && (
        <Notepad
          fileName="aboutme.txt"
          text={profile.about}
          isClosing={notepad.isClosing}
          onClose={notepad.close}
          onFocusWindow={() => bringToFront(DOCK_WINDOW_IDS[DOCK_APPS.notepad])}
          zIndex={getZIndex(DOCK_WINDOW_IDS[DOCK_APPS.notepad])}
        />
      )}
    </>
  );
}

export default Dock;
