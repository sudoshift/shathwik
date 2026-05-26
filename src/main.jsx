import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WindowStackProvider } from "./contexts/WindowStackProvider.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <WindowStackProvider>
      <App />
    </WindowStackProvider>
  </StrictMode>
);
