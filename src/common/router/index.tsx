import {
  Home,
  ProjectDetail,
  Projects,
  Research,
  ResearchDetail,
  Resume,
} from "@/pages";
import { Outlet, Route, Routes } from "react-router-dom";

type route = {
  path: string;
  element: React.ReactNode;
};

const routes: route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/research/:id",
    element: <ResearchDetail />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
];

const MainRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Outlet />
    </>
  );
};

export default MainRouter;
