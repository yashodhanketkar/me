import { ResearchPage } from '@/pages/research/list';
import { ResearchDetailPage } from '@/pages/research/details';
import { Outlet, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { ProjectDetailPage } from '@/pages/projects/details';
import { ProjectPage } from '@/pages/projects/list/index';
import { ResumePage } from '@/pages/resume';

type route = {
  path: string;
  element: React.ReactNode;
};

const routes: route[] = [
  { path: '/', element: <HomePage /> },
  { path: '/research', element: <ResearchPage /> },
  { path: '/research/:id', element: <ResearchDetailPage /> },
  { path: '/projects', element: <ProjectPage /> },
  { path: '/projects/:id', element: <ProjectDetailPage /> },
  { path: '/resume', element: <ResumePage /> },
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
