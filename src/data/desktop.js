import fileIcon from "../assets/Finder/blankFile.avif";
import githubIcon from "../assets/Finder/github.svg";
import linkedInIcon from "../assets/Finder/linkedin.png";
import { profile } from "./profile";

export const stickyNotes = [
  {
    id: "skills",
    heading: "Skills",
    list: [
      "Python",
      "C & C++",
      "MERN Stack",
      "Langchain & Langraph",
      "Springboot",
      "Linux",
    ],
    noteColor: "#fef49c",
    tapeColor: "#f2c200",
    tapeRotate: "rotate(-30deg)",
    noteRotate: "rotate(-3deg)",
    position: { top: "100px", left: "50px" },
  },
  {
    id: "interests",
    heading: "Interests",
    list: ["Sports", "Science", "IoT"],
    noteColor: "#fe9c9c",
    tapeColor: "#f20000",
    tapeRotate: "rotate(28deg)",
    noteRotate: "rotate(3deg)",
    position: { top: "80px", left: "80vw" },
  },
];

export const heroLines = [
  {
    id: "name",
    text: "My name is Shathwik...",
    speed: 80,
    style: {
      position: "fixed",
      top: "40%",
      left: "47%",
      transform: "translate(-50%, -50%)",
      fontSize: "5em",
      transformOrigin: "center",
      fontFamily: "monospace",
      fontWeight: "bold",
    },
  },
  {
    id: "role",
    text: "I am a <developer/>",
    speed: 100,
    style: {
      position: "fixed",
      top: "50%",
      left: "50%",
      fontSize: "5em",
      transformOrigin: "center",
      fontFamily: "monospace",
      fontWeight: "bold",
    },
  },
];

export const desktopFiles = [
  {
    id: "about",
    type: "note",
    fileName: "aboutme.txt",
    icon: fileIcon,
    text: profile.about,
    position: { top: "60vh", left: "20vw" },
  },
  {
    id: "resume",
    type: "link",
    fileName: "resume.pdf",
    icon: fileIcon,
    href: profile.resumeUrl,
    position: { top: "65vh", left: "10vw" },
  },
  {
    id: "github",
    type: "link",
    fileName: "@shathwik30.git",
    icon: githubIcon,
    href: profile.githubUrl,
    position: { top: "70vh", left: "30vw" },
  },
  {
    id: "linkedin",
    type: "link",
    fileName: "my linkedin",
    icon: linkedInIcon,
    href: profile.linkedInUrl,
    position: { top: "64vh", left: "40vw" },
  },
];
