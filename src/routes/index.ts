import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import Resume from "../pages/resume";
import About from "../pages/about";
import { ROUTE_PATHS } from "../constants";

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.PERSONAL_PORFOLIO,
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: ROUTE_PATHS.PROJECTS, Component: Projects },
      { path: ROUTE_PATHS.SKILLS, Component: Skills },
      { path: ROUTE_PATHS.RESUME, Component: Resume },
      { path: ROUTE_PATHS.ABOUT, Component: About },
    ],
  },
]);

export default router;
