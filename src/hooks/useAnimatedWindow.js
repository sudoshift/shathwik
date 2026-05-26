import { useCallback, useEffect, useRef, useState } from "react";
import { WINDOW_ANIMATION_MS } from "../constants/app";

export function useAnimatedWindow(animationMs = WINDOW_ANIMATION_MS) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const open = useCallback(() => {
    clearCloseTimer();
    setIsClosing(false);
    setIsOpen(true);
  }, [clearCloseTimer]);

  const close = useCallback(() => {
    setIsClosing(true);
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimer.current = null;
    }, animationMs);
  }, [animationMs, clearCloseTimer]);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
      return;
    }

    open();
  }, [close, isOpen, open]);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  return { close, isClosing, isOpen, open, toggle };
}
