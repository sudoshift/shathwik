export const projects = [
  {
    id: "movie-list",
    name: "My Movie List",
    url: "https://my-movie-list-qugl.onrender.com/",
    position: { top: "26vh", left: "55vw" },
  },
  {
    id: "resume-analyzer",
    name: "AI Resume Analyzer",
    url: "https://ai-resume-analyzer-frontend-zpf0.onrender.com/",
    position: { top: "30vh", left: "65vw" },
  },
  {
    id: "course-selling",
    name: "Course Selling App",
    url: "https://course-selling-fullstack-application-ekzb.onrender.com/",
    position: { top: "15vh", left: "60vw" },
    isDefault: true,
  },
  {
    id: "banking-system",
    name: "Banking System",
    url: "https://banking-system-frontend-fbc5.onrender.com",
    position: { top: "15vh", left: "70vw" },
  },
];

export const defaultProject =
  projects.find((project) => project.isDefault) ?? projects[0];
