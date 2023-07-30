import { Home, Projects, Research, Resume } from "@/pages";
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
    path: "/projects",
    element: <Projects />,
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
