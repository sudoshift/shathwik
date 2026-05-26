import styles from "./StickyNote.module.css";
import TypeWriter from "../TypeWriter/TypeWriter";

function StickyNote({
  noteColor = "#fff",
  tapeRotate = "rotate(0deg)",
  tapeColor = "#ccc",
  noteRotate = "rotate(0deg)",
  position = { top: "100px", left: "100px" },
  heading = "",
  list = [],
}) {
  return (
    <div
      className={styles.note}
      style={{
        backgroundColor: `${noteColor}`,
        transform: `${noteRotate}`,
        top: position.top,
        left: position.left,
      }}
    >
      <div
        className={styles.tape}
        style={{ backgroundColor: tapeColor, transform: tapeRotate }}
      ></div>
      <h2 className={styles.note_heading}>
        {
          <TypeWriter
            text={`${heading}`}
            speed={150}
            style={{ fontFamily: "monospace", fontStyle: "italic" }}
          />
        }
      </h2>
      <ul>
        {list.map((skill, index) => (
          <li key={index}>
            <TypeWriter
              text={skill}
              speed={150}
              style={{ fontFamily: "monospace", fontStyle: "italic" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StickyNote;
