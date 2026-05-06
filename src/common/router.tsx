import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, Route, Routes } from 'react-router-dom';

import { ErrorMessage } from './error';
import { LoadingMessage } from './loading';

const Home = lazy(() => import('@/pages/home/index'));
const ProjectDetail = lazy(() => import('@/pages/projects/details/index'));
const ProjectList = lazy(() => import('@/pages/projects/list/index'));
const ResearchDetail = lazy(() => import('@/pages/research/details/index'));
const ResearchList = lazy(() => import('@/pages/research/list/index'));
const Resume = lazy(() => import('@/pages/resume/index'));

type route = {
  path: string;
  element: React.ReactNode;
};

const routes: route[] = [
  { path: '/', element: <Home /> },
  { path: '/research', element: <ResearchList /> },
  { path: '/research/:id', element: <ResearchDetail /> },
  { path: '/projects', element: <ProjectList /> },
  { path: '/projects/:id', element: <ProjectDetail /> },
  { path: '/resume', element: <Resume /> },
];

const MainRouter = () => {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainRouter;
