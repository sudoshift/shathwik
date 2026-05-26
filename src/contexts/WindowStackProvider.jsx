import { useCallback, useMemo, useState } from "react";
import { BASE_WINDOW_Z_INDEX } from "../constants/app";
import { WindowStackContext } from "./windowStackContext";

export function WindowStackProvider({ children }) {
  const [stack, setStack] = useState({
    topZIndex: BASE_WINDOW_Z_INDEX,
    zIndexes: {},
  });

  const bringToFront = useCallback((windowId) => {
    if (!windowId) return;

    setStack((currentStack) => {
      const nextZIndex = currentStack.topZIndex + 1;

      return {
        topZIndex: nextZIndex,
        zIndexes: {
          ...currentStack.zIndexes,
          [windowId]: nextZIndex,
        },
      };
    });
  }, []);

  const getZIndex = useCallback(
    (windowId) => stack.zIndexes[windowId] ?? BASE_WINDOW_Z_INDEX,
    [stack.zIndexes]
  );

  const value = useMemo(() => ({ bringToFront, getZIndex }), [bringToFront, getZIndex]);

  return (
    <WindowStackContext.Provider value={value}>{children}</WindowStackContext.Provider>
  );
}
