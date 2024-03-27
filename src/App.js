import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import AboutPage from "./pages/About";
import ExperiencePage from "./pages/Experience";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      {
        path: "work-experience",
        element: <ExperiencePage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
