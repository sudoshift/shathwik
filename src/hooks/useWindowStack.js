import { useContext } from "react";
import { WindowStackContext } from "../contexts/windowStackContext";

export function useWindowStack() {
  const value = useContext(WindowStackContext);

  if (!value) {
    throw new Error("useWindowStack must be used inside WindowStackProvider.");
  }

  return value;
}
