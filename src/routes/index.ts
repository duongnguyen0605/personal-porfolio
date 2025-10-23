import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import Resume from "../pages/resume";
import About from "../pages/about";

const router = createBrowserRouter([
  {
    path: "/personal-porfolio",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "skills", Component: Skills },
      { path: "resume", Component: Resume },
      { path: "about", Component: About },
    ],
  },
]);

export default router;
