import Dock from "./components/Dock/Dock";
import File from "./components/File/File";
import Folder from "./components/Folder/Folder";
import Navbar from "./components/Navbar/Navbar";
import StickyNote from "./components/StickyNote/StickyNote";
import Typewriter from "./components/TypeWriter/TypeWriter";
import { desktopFiles, heroLines, stickyNotes } from "./data/desktop";
import { projects } from "./data/projects";

function App() {
  return (
    <>
      <Navbar />
      {stickyNotes.map((note) => (
        <StickyNote key={note.id} {...note} />
      ))}
      {heroLines.map((line) => (
        <Typewriter key={line.id} {...line} />
      ))}
      <Dock />
      {desktopFiles.map((file) => (
        <File key={file.id} {...file} />
      ))}
      {projects.map((project) => (
        <Folder key={project.id} project={project} />
      ))}
    </>
  );
}

export default App;
