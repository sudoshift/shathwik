import { useState, useEffect } from "react";

function Typewriter({ text = "", speed = 100, style }) {
  const [typingState, setTypingState] = useState({ text, index: 0 });

  if (typingState.text !== text) {
    setTypingState({ text, index: 0 });
  }

  const currentIndex = typingState.text === text ? typingState.index : 0;

  useEffect(() => {
    if (text.length <= 1 || currentIndex >= text.length - 1) {
      return;
    }

    const typing = setTimeout(() => {
      setTypingState((current) => {
        if (current.text !== text || current.index >= text.length - 1) {
          return current;
        }

        return { text, index: current.index + 1 };
      });
    }, speed);

    return () => clearTimeout(typing);
  }, [currentIndex, text, speed]);

  return <span style={style}>{text.slice(0, currentIndex + 1)}</span>;
}

export default Typewriter;
